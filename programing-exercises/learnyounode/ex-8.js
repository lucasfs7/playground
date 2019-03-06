const http = require('http')
const bl = require('bl')
const [ _, __, url ] = process.argv

http
  .get(url, (response) => {
    const onEnd = (err, data) => {
      if (err) return console.error(err)
      console.log(data.length)
      console.log(data.toString())
    }
    response.pipe(bl(onEnd))
  })
  .on('error', console.error)
