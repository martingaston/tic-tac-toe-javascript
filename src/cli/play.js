const drawBoard = require('./drawBoard')
const getMove = require('./getMove')
const gameOver = require('./gameOver')

const { update } = require('../game/')

const play = async (options, io) => {
  const { board, messages } = options
  const { input, output, write } = io

  if (gameIsOver(options)) {
    return gameOver(options, io)
  }

  write(drawBoard(board))

  const position = await getMove(input, output, messages.turn)

  play(update(position, options), io)
}

const gameIsOver = ({ isActive }) => !isActive

module.exports = play
