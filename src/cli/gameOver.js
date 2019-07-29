const drawBoard = require('./drawBoard')

module.exports = (options, io) => {
  const { state, messages } = options
  const { write } = io

  write(drawBoard(state))
  write(messages.ending)
}
