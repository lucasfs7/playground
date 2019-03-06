const fs = require('fs')
const http = require('http')
const [ _, __, port, file ] = process.argv

const app = (req, res) => {
  fs
    .createReadStream(file)
    .pipe(res)
}

http
  .createServer(app)
  .listen(port)
