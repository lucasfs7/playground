const fs = require('fs')
const path = require('path')


module.exports = function (dirPath, extFilter, callback) {
  fs.readdir(dirPath, (err, list) => {
    if (err) return callback(err)

    const filtered = list.filter((item) => path.extname(item) === `.${ extFilter }`)
    callback(null, filtered)
  })
}
