const fs = require('fs')
const path = require('path')
const [ _, __, dirPath, extFilter ] = process.argv

fs.readdir(dirPath, (err, list) => {
  if (err) return console.log(err)

  list
    .filter((item) => path.extname(item) === `.${ extFilter }`)
    .forEach((item) => console.log(item))
})
