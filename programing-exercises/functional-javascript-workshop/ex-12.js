module.exports = (target, method) => {
  const spy = { count: 0 }
  const methodFn = target[method]
  target[method] = (...args) => {
    spy.count++
    methodFn.apply(target, [ args ])
  }
  return spy
}
