const makeMove = require('./makeMove')

const start = (options, updater, io) => {
  const { messages } = options
  const { write } = io

  write(messages.title)
  write(messages.intro)
  write(messages.instructions)

  makeMove(options, updater, io)
}

module.exports = start
