const http = require('http')
const map = require('through2-map')
const [ _, __, port ] = process.argv

const app = (req, res) => {
  if (req.method !== 'POST') {
    return res.end('POST only, pls')
  }

  req
    .pipe(map((chunk) => chunk.toString().toUpperCase()))
    .pipe(res)
}

http
  .createServer(app)
  .listen(port)
