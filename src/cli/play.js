const drawBoard = require('./drawBoard')
const getMove = require('./getMove')
const gameOver = require('./gameOver')

const { update, validator } = require('../game/')

const play = async (game, io) => {
  const { board, messages } = game
  const { input, output, write } = io

  if (gameIsOver(game)) {
    return gameOver(game, io)
  }

  write(drawBoard(board))

  let position = await getMove(input, output, messages.turn)
  let validated = validator(position, board)

  while (validated.status !== 'ok') {
    position = await getMove(input, output, validated.message)
    validated = validator(position, board)
  }

  play(update(position, game), io)
}

const gameIsOver = ({ isActive }) => !isActive

module.exports = play
