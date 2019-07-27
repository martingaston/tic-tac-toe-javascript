const board = require('../board')
const {
  bestPositionReducer,
  maximumReducer,
  minimumReducer,
} = require('./minimaxReducers')

const WINNING_SCORE = 10
const LOSING_SCORE = -10
const DRAW_SCORE = 0

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
    .reduce(bestPositionReducer, { position: null, value: -100000 })
}

const scoreMax = (state, players) => {
  if (board.hasWinner(state)) {
    return WINNING_SCORE + board.available(state).length
  }

  if (board.available(state).length === 0) {
    return DRAW_SCORE
  }

  const scores = board
    .available(state)
    .map(position =>
      scoreMin(board.update(state, position, players.minimiser), players)
    )
    .reduce(minimumReducer, +1000)

  return scores
}

const scoreMin = (state, players) => {
  if (board.hasWinner(state)) {
    return LOSING_SCORE - board.available(state).length
  }

  if (board.available(state).length === 0) {
    return DRAW_SCORE
  }

  const scores = board
    .available(state)
    .map(position =>
      scoreMax(board.update(state, position, players.maximiser), players)
    )
    .reduce(maximumReducer, -1000)

  return scores
}

const calculatePlayers = maximisingPlayer => ({
  maximiser: maximisingPlayer === 'X' ? 'X' : 'O',
  minimiser: maximisingPlayer === 'X' ? 'O' : 'X',
})

module.exports = initialise
