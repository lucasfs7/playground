const http = require('http')
const bl = require('bl')
const [ _, __, ...urls ] = process.argv

const after = (total, callback) => {
  let called = 1
  return (...args) => {
    if (called < total) {
      called++
      return
    }
    callback(...args)
  }
}

const results = {}

const onEndAll = after(urls.length, () => {
  urls.forEach((url) => {
    console.log(results[url])
  })
})

urls.map((url) => {
  http
    .get(url, (response) => {
      const onEnd = (err, data) => {
        if (err) return console.error(err)
        results[url] = data.toString()
        onEndAll()
      }
      response.pipe(bl(onEnd))
    })
    .on('error', console.error)
})

