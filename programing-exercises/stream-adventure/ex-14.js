const crypto = require('crypto')
const [ _, __, passphrase ] = process.argv

process
  .stdin
  .pipe(crypto.createDecipher('aes256', passphrase))
  .pipe(process.stdout)
