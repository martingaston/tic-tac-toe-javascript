const display = require('./display')

module.exports = (options, io) => {
  const { state, messages } = options
  const { write } = io

  write(display.board(state))
  write(messages.ending)
}
