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

start(game.init(mode), io)
