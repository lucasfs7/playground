const concat = require('concat-stream')

process
  .stdin
  .pipe(concat((data) => {
    console.log(
      data
        .toString()
        .split('\n')
        .reverse()
        .map((item) => item.split("").reverse().join(""))
        .join('\n')
    )
  }))
