const messages = require('./messages')
const board = require('./board')

module.exports = (mode = 'human') => ({
  isActive: true,
  state: board.newState(),
  messages: {
    title: messages.title(),
    intro: messages.intro(),
    instructions: messages.instructions(),
    turn: messages.turn('X'),
  },
  currentPlayer: 'X',
  mode,
})
