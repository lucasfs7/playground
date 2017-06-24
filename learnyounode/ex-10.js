const net = require('net')
const [ _, __, port ] = process.argv

const formatDate = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${ year }-${ `${ '00'.substring(`${ month }`.length, 2) }${ month }` }-${ day } ${ hours }:${ minutes }`
}

const app = (socket) => {
  const now = new Date()
  socket.end(`${ formatDate(now) }\n`)
}

net
  .createServer(app)
  .listen(port)
