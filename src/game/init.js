const messages = require('./messages')
const referee = require('./referee')

module.exports = (mode = 'human') => ({
  isActive: true,
  board: referee.create(),
  messages: {
    title: messages.title(),
    intro: messages.intro(),
    instructions: messages.instructions(),
    turn: messages.turn('X'),
  },
  currentPlayer: 'X',
  mode,
})
