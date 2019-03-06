const combine = require('stream-combiner')
const through = require('through2')
const zlib =  require('zlib')

module.exports = () => {
  let currentGenre
  const genres = {}

  const groupGenres = (buffer, _, next) => {
    const data = JSON.parse(buffer)
    if (data.type === 'genre') {
      currentGenre = data.name
    }
    if (data.type === 'book') {
      genres[currentGenre] = {
        name: currentGenre,
        books: [
          ...((genres[currentGenre] || {}).books || []),
          data.name
        ]
      }
    }
    next()
  }

  const sendGroupedGenres = (done) => {
    const data = Object
      .values(genres)
      .map((genre) => JSON.stringify(genre))
      .join('\n')
    done(null, data)
  }

  return combine(
    through(groupGenres, sendGroupedGenres),
    zlib.createGzip()
  )
}
