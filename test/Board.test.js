const Board = require('../src/Board')

describe('The Board class', () => {
  it('Knows the answer', () => {
    const board = new Board()
    expect(board.test()).toEqual(42)
  })
})
