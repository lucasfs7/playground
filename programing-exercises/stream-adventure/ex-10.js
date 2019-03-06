const through = require('through2')
const trumpet = require('trumpet')
const tr = trumpet()

tr
  .pipe(process.stdout)

tr
  .selectAll('.loud', (loud) => {
    const stream = loud.createStream()
    stream
      .pipe(through(function (buffer, _, next) {
        this.push(buffer.toString().toUpperCase())
        next()
      }))
      .pipe(stream)
  })

process
  .stdin
  .pipe(tr)
