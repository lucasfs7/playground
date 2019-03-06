var ws = require('websocket-stream')
var through = require('through2')
var stream = ws('ws://localhost:8099')

stream.write('hello\n')
