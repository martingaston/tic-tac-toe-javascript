const display = require('./display')
const getMove = require('./getMove')
const gameOver = require('./gameOver')
const game = require('../game')

const makeMove = async (options, io) => {
  const { isActive, state, messages } = options
  const { input, output, write } = io

  if (!isActive) {
    return gameOver(options, io)
  }

  const newline = '\n'
  write(newline + display.board(state) + newline)

  const position = await getMove(input, output, messages.turn)

  makeMove(game.update(position, options), io)
}

module.exports = makeMove
