const random = require('../../../src/game/ai/random')
const board = require('../../../src/game/board')

describe('The random computer AI', () => {
  it('picks the one remaining move if available from a board state', () => {
    let state = board.newState()
    state = board.update(state, 1, 'X')
    state = board.update(state, 2, 'X')
    state = board.update(state, 3, 'X')
    state = board.update(state, 4, 'X')
    state = board.update(state, 5, 'X')
    state = board.update(state, 6, 'X')
    state = board.update(state, 7, 'X')
    state = board.update(state, 8, 'X')

    expect(random.chooseMove(board, state)).toEqual(9)
  })

  it('does not pick an unavailable move', () => {
    let state = board.newState()
    state = board.update(state, 1, 'X')

    expect(random.chooseMove(board, state)).not.toEqual(1)
  })
})
