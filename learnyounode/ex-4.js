const fs = require('fs')
const [ _, __, fileName ] = process.argv

fs.readFile(fileName, 'utf8', (err, content) => {
  if (err) console.log(err)

  const totalNewLines = content.match(/\n/g)

  console.log(totalNewLines.length)
})
