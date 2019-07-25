const game = require('../game')
const makeMove = require('./makeMove')

const start = (options, io) => {
  const { messages } = options
  const { write } = io

  write(messages.title)
  write(messages.intro)
  write(messages.instructions)

  makeMove(options, io)
}

if (require.main === module) {
  const io = {
    input: process.stdin,
    output: process.stdout,
    write: console.log,
  }

  const options = game.init()
  start(options, io)
}

module.exports = start
