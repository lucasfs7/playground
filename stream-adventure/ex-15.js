const crypto = require('crypto')
const zlib = require('zlib')
const tar = require('tar')
const concat = require('concat-stream')
const [ _, __, cipher, passphrase ] = process.argv

process
  .stdin
  .pipe(crypto.createDecipher(cipher, passphrase))
  .pipe(zlib.createGunzip())
  .pipe(tar
    .Parse()
    .on('entry', (entry) => {
      if (entry.type !== 'File') return
      entry
        .pipe(crypto.createHash('md5', { encoding: 'hex' }))
        .pipe(concat((hash) => {
          console.log(`${ hash } ${ entry.path }`)
        }))
    })
  )
