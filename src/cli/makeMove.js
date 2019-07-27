const display = require('./display')
const getMove = require('./getMove')
const gameOver = require('./gameOver')

const makeMove = async (options, updater, io) => {
  const { isActive, state, messages } = options
  const { input, output, write } = io

  if (!isActive) {
    return gameOver(options, io)
  }

  const newline = '\n'
  write(newline + display.board(state) + newline)

  const position = await getMove(input, output, messages.turn)

  makeMove(updater(position, options), updater, io)
}

module.exports = makeMove
