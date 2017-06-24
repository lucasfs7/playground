const reduce = (arr, fn, init) => {
  if (!arr.length) return init
  const [ head, ...tail ] = arr
  return reduce(tail, fn, fn(init, head))
}

module.exports = reduce
