const start = require('./src/cli')
const game = require('./src/game')

const io = {
  input: process.stdin,
  output: process.stdout,
  write: console.log,
}
const options = game.init()

start(options, io)
