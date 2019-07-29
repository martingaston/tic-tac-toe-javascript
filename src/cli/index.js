const play = require('./play')

const start = (options, updater, io) => {
  const { messages } = options
  const { write } = io

  write(messages.title)
  write(messages.intro)
  write(messages.instructions)

  play(options, updater, io)
}

module.exports = start
