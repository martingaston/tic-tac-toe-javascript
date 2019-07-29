const play = require('./play')

const start = (game, io) => {
  const { messages } = game
  const { write } = io

  write(messages.title)
  write(messages.intro)
  write(messages.instructions)

  play(game, io)
}

module.exports = start
