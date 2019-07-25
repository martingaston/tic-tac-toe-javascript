const game = require('../game/')
const makeMove = require('./makeMove')

module.exports = (position, options, io) => {
  const updatedOptions = game.update(position, options)
  makeMove(updatedOptions, io)
}
