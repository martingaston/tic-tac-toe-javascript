const play = require('./play')

const start = (options, io) => {
  const { messages } = options
  const { write } = io

  write(messages.title)
  write(messages.intro)
  write(messages.instructions)

  play(options, io)
}

module.exports = start
