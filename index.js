const start = require('./src/cli')
const game = require('./src/game')

const io = {
  input: process.stdin,
  output: process.stdout,
  write: console.log,
}

let mode
if (process.argv[2] === '--mode' && process.argv[3] === 'ai') {
  mode = 'ai'
} else {
  mode = 'human'
}

const options = game.init(mode)
const updater = game.update

start(options, updater, io)
