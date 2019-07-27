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

    expect(() => minimax(state, 'X')).toThrow(TypeError)
  })

  it('returns the last move left on the board if one move is available', () => {
    state = board.update(state, 1, 'X')
    state = board.update(state, 2, 'O')
    state = board.update(state, 3, 'X')
    state = board.update(state, 4, 'X')
    state = board.update(state, 5, 'O')
    state = board.update(state, 6, 'O')
    state = board.update(state, 7, 'O')
    state = board.update(state, 8, 'X')
    const position = 9

    expect(minimax(state, 'X').position).toEqual(position)
  })

  it('chooses a win over a draw with two squares available', () => {
    state = board.update(state, 1, 'X')
    state = board.update(state, 2, 'O')
    state = board.update(state, 3, 'X')
    state = board.update(state, 4, 'X')
    state = board.update(state, 6, 'O')
    state = board.update(state, 7, 'O')
    state = board.update(state, 9, 'X')
    const position = 5

    expect(minimax(state, 'X').position).toEqual(position)
  })

  it('avoids a loss', () => {
    state = board.update(state, 1, 'X')
    state = board.update(state, 2, 'X')
    state = board.update(state, 3, 'O')
    state = board.update(state, 5, 'O')
    const position = 7

    expect(minimax(state, 'X').position).toEqual(position)
  })

  it('works with both X and O marks as the maximising player', () => {
    state = board.update(state, 1, 'O')
    state = board.update(state, 2, 'O')
    const noughtWinningValue = 16

    expect(minimax(state, 'O').value).toEqual(noughtWinningValue)
  })
})
