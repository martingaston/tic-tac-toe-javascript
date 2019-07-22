const Board = require('../src/Board')

describe('The Board class', () => {
  describe('With Board.new()', () => {
    it('Returns 9 moves by default', () => {
      const board = Board.new()
      expect(Board.available(board)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
  })

  describe('Using Board.update()', () => {
    it('Can retrieve a mark from a played square', () => {
      const board = Board.new()
      const updatedBoard = Board.update(board, 9, 'X')
      expect(Board.get(updatedBoard, 9)).toEqual('X')
    })

    it('Returns 8 moves if one has been played', () => {
      const board = Board.new()
      const updatedBoard = Board.update(board, 1, 'X')
      expect(Board.available(updatedBoard)).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('Throws if the requested position is out of range', () => {
      const board = Board.new()
      const tooLow = 0
      const tooHigh = 10

      expect(() => Board.update(board, tooLow, 'X')).toThrow(RangeError)
      expect(() => Board.update(board, tooHigh, 'X')).toThrow(RangeError)
    })
  })

  describe('Using Board.hasWinner()', () => {
    it('Knows an board with no played moves has no winner', () => {
      const board = Board.new()
      expect(Board.hasWinner(board)).toBe(false)
    })

    it('Knows three played moves on a horizontal is a winning move', () => {
      const board = Board.new()
      const firstMove = Board.update(board, 1, 'X')
      const secondMove = Board.update(firstMove, 2, 'X')
      const thirdMove = Board.update(secondMove, 3, 'X')
      expect(Board.hasWinner(thirdMove)).toBe(true)
    })

    it('Knows three played moves on a vertical is a winning move', () => {
      const board = Board.new()
      const firstMove = Board.update(board, 2, 'X')
      const secondMove = Board.update(firstMove, 5, 'X')
      const thirdMove = Board.update(secondMove, 8, 'X')
      expect(Board.hasWinner(thirdMove)).toBe(true)
    })

    it('Knows three played moves on a diagonal is a winning move', () => {
      const board = Board.new()
      const firstMove = Board.update(board, 3, 'X')
      const secondMove = Board.update(firstMove, 5, 'X')
      const thirdMove = Board.update(secondMove, 7, 'X')
      expect(Board.hasWinner(thirdMove)).toBe(true)
    })
  })
})
