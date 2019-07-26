const board = require('./board')
const messages = require('./messages')
const minimax = require('./ai/minimaxPlayer')

const swapPlayer = currentPlayer => (currentPlayer === 'X' ? 'O' : 'X')

const getEndingMessage = (state, currentPlayer) => {
  if (board.hasWinner(state)) {
    return messages.winner(currentPlayer)
  }

  return messages.draw()
}

const update = (position, options) => {
  const newState = board.update(options.state, position, options.currentPlayer)

  if (gameIsOver(newState)) {
    return gameOver(newState, options.currentPlayer)
  }

  if (options.mode === 'ai' && swapPlayer(options.currentPlayer) === 'O') {
    return update(
      minimax.chooseMove(board, newState),
      nextMove(newState, options)
    )
  }

  return nextMove(newState, options)
}

const gameIsOver = state =>
  board.hasWinner(state) || board.available(state).length <= 0

const nextMove = (state, options) => {
  const nextPlayer = swapPlayer(options.currentPlayer)
  return {
    ...options,
    state,
    currentPlayer: nextPlayer,
    isActive: true,
    messages: {
      turn: messages.turn(nextPlayer),
    },
  }
}

const gameOver = (state, currentPlayer) => ({
  state,
  isActive: false,
  messages: {
    ending: getEndingMessage(state, currentPlayer),
  },
})

module.exports = update
