const minimax = require('./minimax')

module.exports = {
  chooseMove: (board, state) => {
    return minimax(state, 'O').position
  },
}
