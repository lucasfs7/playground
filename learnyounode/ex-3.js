const fs = require('fs')
const [ _, __, fileName ] = process.argv
const buffer = fs.readFileSync(fileName)
const contentString = buffer.toString()
const totalNewLines = contentString.match(/\n/g)

console.log(totalNewLines.length)
