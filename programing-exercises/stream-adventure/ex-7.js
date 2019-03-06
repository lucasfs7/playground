const http = require('http')
const through = require('through2')
const [ _, __, port ] = process.argv

const toUpperCaseBody = through((buffer, _, next) => {
  next(null, buffer.toString().toUpperCase())
})

const app = (req, res) => {
  if (req.method !== 'POST') {
    return res.end('I need a POST')
  }

  req
    .pipe(toUpperCaseBody)
    .pipe(res)
}

http
  .createServer(app)
  .listen(port)
