const duplexer = require('duplexer2')
const { spawn } = require('child_process')

module.exports = (cmd, args) => {
  const child = spawn(cmd, args)
  return duplexer(child.stdin, child.stdout)
}
