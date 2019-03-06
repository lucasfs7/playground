module.exports = (inputWords) => inputWords
  .reduce((counter, word) => Object.assign(
    {},
    counter,
    { [word]: (counter[word] || 0) + 1 }
  ), {})
