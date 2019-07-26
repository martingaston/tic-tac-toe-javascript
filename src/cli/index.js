const makeMove = require('./makeMove')

const start = (options, io) => {
  const { messages } = options
  const { write } = io

  write(messages.title)
  write(messages.intro)
  write(messages.instructions)

  makeMove(options, io)
}

module.exports = start
