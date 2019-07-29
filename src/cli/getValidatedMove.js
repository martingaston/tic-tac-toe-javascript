const getInput = require('./getInput')
const { validator } = require('../game/')

const getValidatedMove = async (board, message, io) => {
  const { input, output } = io

  const position = await getInput(input, output, message)
  const validated = validator(position, board)

  if (validated.status !== 'ok') {
    return getValidatedMove(board, validated.message, io)
  }

  return Number.parseInt(position)
}

module.exports = getValidatedMove
