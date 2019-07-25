const game = require('../game/')
const makeMove = require('./makeMove')

const start = (options, io) => {
  const { messages } = options
  const { print } = io

  print(messages.title)
  print(messages.intro)
  print(messages.instructions)

  makeMove(options, io)
}

if (require.main === module) {
  const io = {
    in: process.stdin,
    out: process.stdout,
    write: console.log,
  }

  const options = game.init()
  start(options, io)
}
