const fs = require('fs')
const [ _, __, file ] = process.argv

fs
  .createReadStream(file)
  .pipe(process.stdout)
