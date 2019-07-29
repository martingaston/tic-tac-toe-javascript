const drawBoard = require('../../src/cli/drawBoard')
const referee = require('../../src/game/referee')

describe('the display functions', () => {
  it('can display an empty board', () => {
    const board = referee.create()
    const expected = `\n+-----------+
| 1 | 2 | 3 |
+-----------+
| 4 | 5 | 6 |
+-----------+
| 7 | 8 | 9 |
+-----------+\n`

    expect(drawBoard(board)).toEqual(expected)
  })
  it('can display a boardwith moves played', () => {
    const board = referee.create()
    const firstMove = referee.update(board, 1, 'X')
    const secondMove = referee.update(firstMove, 5, 'O')
    const thirdMove = referee.update(secondMove, 9, 'X')
    const expected = `\n+-----------+
| X | 2 | 3 |
+-----------+
| 4 | O | 6 |
+-----------+
| 7 | 8 | X |
+-----------+\n`

    expect(drawBoard(thirdMove)).toEqual(expected)
  })
})
