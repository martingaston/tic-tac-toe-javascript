const display = require('./display')
const getMove = require('./getMove')
const update = require('./update')

module.exports = async (options, io) => {
  const { isActive, state, messages } = options
  const { input, output, write } = io

  if (!isActive) {
    return write('What a good game!')
  }

  write(display.board(state))

  const position = await getMove(input, output, messages.turn)

  update(position, options, io)
}
