const board = require('../board')

const initialise = (state, maximisingPlayer) => {
  if (board.available(state).length === 0) {
    throw new TypeError('Must supply a board state that is not full')
  }

  const players = calculatePlayers(maximisingPlayer)

  return board
    .available(state)
    .map(position => [
      position,
      scoreMax(board.update(state, position, players.maximiser), players),
    ])
    .reduce(
      (maximum, currentPosition) => {
        const position = currentPosition[0]
        const value = currentPosition[1]

        return value > maximum.value ? { position, value } : maximum
      },
      { position: null, value: -100000 }
    )
}

const scoreMax = (state, players) => {
  if (board.hasWinner(state)) {
    return 10 + board.available(state).length
  }

  if (board.available(state).length === 0) {
    return 0
  }

  const scores = board
    .available(state)
    .map(position =>
      scoreMin(board.update(state, position, players.minimiser), players)
    )
    .reduce((acc, x) => (x < acc ? x : acc), +1000)

  return scores
}

const scoreMin = (state, players) => {
  if (board.hasWinner(state)) {
    return -10 - board.available(state).length
  }

  if (board.available(state).length === 0) {
    return 0
  }

  const scores = board
    .available(state)
    .map(position =>
      scoreMax(board.update(state, position, players.maximiser), players)
    )
    .reduce((acc, x) => (x > acc ? x : acc), -1000)

  return scores
}

const calculatePlayers = maximisingPlayer => ({
  maximiser: maximisingPlayer === 'X' ? 'X' : 'O',
  minimiser: maximisingPlayer === 'X' ? 'O' : 'X',
})

module.exports = initialise
