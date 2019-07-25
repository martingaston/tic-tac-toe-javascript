const board = require('./board')
const messages = require('./messages')

const swapPlayer = currentPlayer => (currentPlayer === 'X' ? 'O' : 'X')

const getEndingMessage = (state, currentPlayer) => {
  if (board.hasWinner(state)) {
    return messages.winner(currentPlayer)
  }

  return messages.draw()
}

module.exports = (position, options) => {
  const newState = board.update(options.state, position, options.currentPlayer)
  const nextPlayer = swapPlayer(options.currentPlayer)
  const isActive =
    !board.hasWinner(newState) && board.available(newState).length > 0

  if (!isActive) {
    const ending = getEndingMessage(newState, options.currentPlayer)
    return {
      state: newState,
      isActive: false,
      messages: {
        ending,
      },
    }
  }

  return {
    ...options,
    state: newState,
    currentPlayer: nextPlayer,
    isActive,
    messages: {
      turn: messages.turn(nextPlayer),
    },
  }
}
