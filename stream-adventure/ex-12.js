const duplexer = require('duplexer2')
const { obj: through } = require('through2')

module.exports = (counter) => {
  const counts = {}

  const updateCount = (buffer, _, next) => {
    counts[buffer.country] = (counts[buffer.country] || 0) + 1
    next()
  }

  const setCounts = (done) => {
    counter.setCounts(counts)
    done()
  }

  return duplexer({ objectMode: true }, through(updateCount, setCounts), counter)
}
