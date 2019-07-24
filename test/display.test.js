const display = require('../src/display')
const board = require('../src/board')

describe('the display functions', () => {
  it('can display an empty board', () => {
    const state = board.newState()
    const expected = `+-----------+
| 1 | 2 | 3 |
+-----------+
| 4 | 5 | 6 |
+-----------+
| 7 | 8 | 9 |
+-----------+`

    expect(display.board(state, board)).toEqual(expected)
  })
  it('can display an board with moves played', () => {
    const state = board.newState()
    const firstMove = board.update(state, 1, 'X')
    const secondMove = board.update(firstMove, 5, 'O')
    const thirdMove = board.update(secondMove, 9, 'X')
    const expected = `+-----------+
| X | 2 | 3 |
+-----------+
| 4 | O | 6 |
+-----------+
| 7 | 8 | X |
+-----------+`

    expect(display.board(thirdMove, board)).toEqual(expected)
  })
})
