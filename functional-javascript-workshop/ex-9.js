module.exports = (namespace) =>
  (...args) =>
    console.log.apply(null, [ namespace, ...args ])
