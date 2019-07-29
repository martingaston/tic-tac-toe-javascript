const drawBoard = require('./drawBoard')
const getMove = require('./getMove')
const gameOver = require('./gameOver')

const { update } = require('../game/')

const play = async (game, io) => {
  const { board, messages } = game
  const { input, output, write } = io

  if (gameIsOver(game)) {
    return gameOver(game, io)
  }

  write(drawBoard(board))

  const position = await getMove(input, output, messages.turn)

  play(update(position, game), io)
}

const gameIsOver = ({ isActive }) => !isActive

module.exports = play
