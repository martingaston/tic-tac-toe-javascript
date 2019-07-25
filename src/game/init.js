const messages = require('./messages')
const board = require('./board')

module.exports = () => ({
  isActive: true,
  state: board.newState(),
  messages: {
    title: messages.title(),
    intro: messages.intro(),
    instructions: messages.instructions(),
  },
  currentPlayer: 'X',
})
