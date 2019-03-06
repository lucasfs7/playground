const http = require('http')
const URL = require('url')
const [ _, __, port ] = process.argv

const parsetime = (date) => ({
  hour: date.getHours(),
  minute: date.getMinutes(),
  second: date.getSeconds()
})

const unixtime = (date) => ({
  unixtime: date.getTime()
})

const app = (req, res) => {
  const url = URL.parse(req.url, true)
  const date = new Date(url.query.iso)
  let body = {}

  switch (url.pathname) {
    case '/api/parsetime':
      body = parsetime(date)
      break
    case '/api/unixtime':
      body = unixtime(date)
      break
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(body))
}

http
  .createServer(app)
  .listen(port)
