const drawBoard = require('./drawBoard')

module.exports = (game, io) => {
  const { board, messages } = game
  const { write } = io

  write(drawBoard(board))
  write(messages.ending)
}
