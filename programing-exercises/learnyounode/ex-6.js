const readdirByExt = require('./ex-6-module')
const [ _, __, filePath, extFilter ] = process.argv

readdirByExt(filePath, extFilter, (err, list) => {
  if (err) return console.log(err)

  list.forEach((item) => console.log(item))
})
