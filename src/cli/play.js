const drawBoard = require('./drawBoard')
const getMove = require('./getMove')
const gameOver = require('./gameOver')

const play = async (options, updater, io) => {
  const { board, messages } = options
  const { input, output, write } = io

  if (gameIsOver(options)) {
    return gameOver(options, io)
  }

  write(drawBoard(board))

  const position = await getMove(input, output, messages.turn)

  play(updater(position, options), updater, io)
}

const gameIsOver = ({ isActive }) => !isActive

module.exports = play
