/*
module.exports = (...args) => args
  .reduce((count, arg) =>
    Object.prototype.hasOwnProperty.call(arg, 'quack')
    ? count + 1
    : count
  , 0)
*/

module.exports = (...args) => args
  .filter((arg) => Object.prototype.hasOwnProperty.call(arg, 'quack'))
  .length
