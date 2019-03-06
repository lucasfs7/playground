module.exports = (input, operation, thisArg = null) => input
  .reduce((output, item, index) => [
    ...output,
    operation.apply(thisArg, [ item, index ])
  ], [])
