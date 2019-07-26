const minimax = require('../../../src/game/ai/minimax')
const board = require('../../../src/game/board')

describe('the minimax algorithm', () => {
  let state
  beforeEach(() => {
    state = board.newState()
  })

  it('throws an error if the board is full', () => {
    state = board.update(state, 1, 'X')
    state = board.update(state, 2, 'O')
    state = board.update(state, 3, 'X')
    state = board.update(state, 4, 'X')
    state = board.update(state, 5, 'O')
    state = board.update(state, 6, 'O')
    state = board.update(state, 7, 'O')
    state = board.update(state, 8, 'X')
    state = board.update(state, 9, 'X')

    expect(() => minimax(state)).toThrow(TypeError)
  })
})
