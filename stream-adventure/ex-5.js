const through = require('through2')
const split = require('split')
let currentLine = 1

process
  .stdin
  .pipe(split())
  .pipe(through(function (line, _, next) {
    const str = line.toString()
    this.push(`${
      currentLine % 2 === 0
      ? str.toUpperCase()
      : str.toLowerCase()
    }\n`)
    currentLine++
    next()
  }))
  .pipe(process.stdout)
