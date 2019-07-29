const get = (board, position) => board[toArrayIndex(position)] || position

const toArrayIndex = number => number - 1

module.exports = {
  get,
}
