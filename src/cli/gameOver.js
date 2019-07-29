const drawBoard = require('./drawBoard')

module.exports = (options, io) => {
  const { board, messages } = options
  const { write } = io

  write(drawBoard(board))
  write(messages.ending)
}
