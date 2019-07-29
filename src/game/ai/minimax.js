const referee = require('../referee')
const {
  bestPositionReducer,
  maximumReducer,
  minimumReducer,
} = require('./minimaxReducers')

const WINNING_SCORE = 10
const LOSING_SCORE = -10
const DRAW_SCORE = 0

const initialise = (board, maximisingPlayer) => {
  if (referee.available(board).length === 0) {
    throw new TypeError('Must supply a board board that is not full')
  }

  const players = calculatePlayers(maximisingPlayer)

  return referee
    .available(board)
    .map(position => [
      position,
      scoreMax(referee.update(board, position, players.maximiser), players),
    ])
    .reduce(bestPositionReducer, { position: null, value: -100000 })
}

const scoreMax = (board, players) => {
  if (referee.hasWinner(board)) {
    return WINNING_SCORE + referee.available(board).length
  }

  if (referee.available(board).length === 0) {
    return DRAW_SCORE
  }

  const scores = referee
    .available(board)
    .map(position =>
      scoreMin(referee.update(board, position, players.minimiser), players)
    )
    .reduce(minimumReducer, +1000)

  return scores
}

const scoreMin = (board, players) => {
  if (referee.hasWinner(board)) {
    return LOSING_SCORE - referee.available(board).length
  }

  if (referee.available(board).length === 0) {
    return DRAW_SCORE
  }

  const scores = referee
    .available(board)
    .map(position =>
      scoreMax(referee.update(board, position, players.maximiser), players)
    )
    .reduce(maximumReducer, -1000)

  return scores
}

const calculatePlayers = maximisingPlayer => ({
  maximiser: maximisingPlayer === 'X' ? 'X' : 'O',
  minimiser: maximisingPlayer === 'X' ? 'O' : 'X',
})

module.exports = initialise
