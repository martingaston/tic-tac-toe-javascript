const drawBoard = require('./drawBoard')
const getMove = require('./getMove')
const gameOver = require('./gameOver')

const play = async (options, updater, io) => {
  const { isActive, state, messages } = options
  const { input, output, write } = io

  if (!isActive) {
    return gameOver(options, io)
  }

  write(drawBoard(state))

  const position = await getMove(input, output, messages.turn)

  play(updater(position, options), updater, io)
}

module.exports = play
