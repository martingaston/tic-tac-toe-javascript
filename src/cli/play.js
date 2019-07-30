const drawBoard = require('./drawBoard')
const getValidatedMove = require('./getValidatedMove')
const gameOver = require('./gameOver')

const { update } = require('../game/')

const play = async (game, io) => {
  const { board, messages } = game
  const { write } = io

  if (gameIsOver(game)) {
    return gameOver(game, io)
  }

  write(drawBoard(board))

  const position = await getValidatedMove(board, messages.turn, io)

  play(update(position, game), io)
}

const gameIsOver = ({ isActive }) => !isActive

module.exports = play
