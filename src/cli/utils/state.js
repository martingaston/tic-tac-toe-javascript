const get = (state, position) => state[toArrayIndex(position)] || position

const toArrayIndex = number => number - 1

module.exports = {
  get,
}
