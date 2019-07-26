const board = require('../../src/game/board')

describe('The board class', () => {
  describe('With board.newState()', () => {
    it('Returns 9 moves by default', () => {
      const state = board.newState()
      expect(board.available(state)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
  })

  describe('Using board.update()', () => {
    it('Can retrieve a mark from a played square', () => {
      const state = board.newState()
      const updatedboard = board.update(state, 9, 'X')
      expect(board.get(updatedboard, 9)).toEqual('X')
    })

    it('Returns 8 moves if one has been played', () => {
      const state = board.newState()
      const updatedboard = board.update(state, 1, 'X')
      expect(board.available(updatedboard)).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('Throws if the requested position is out of range', () => {
      const state = board.newState()
      const tooLow = 0
      const tooHigh = 10

      expect(() => board.update(state, tooLow, 'X')).toThrow(RangeError)
      expect(() => board.update(state, tooHigh, 'X')).toThrow(RangeError)
    })
  })

  describe('Using board.hasWinner()', () => {
    it('Knows an state with no played moves has no winner', () => {
      const state = board.newState()
      expect(board.hasWinner(state)).toBe(false)
    })

    it('Knows three played moves on a horizontal is a winning move', () => {
      const state = board.newState()
      const firstMove = board.update(state, 1, 'X')
      const secondMove = board.update(firstMove, 2, 'X')
      const thirdMove = board.update(secondMove, 3, 'X')
      expect(board.hasWinner(thirdMove)).toBe(true)
    })

    it('Knows three played moves on a vertical is a winning move', () => {
      const state = board.newState()
      const firstMove = board.update(state, 2, 'X')
      const secondMove = board.update(firstMove, 5, 'X')
      const thirdMove = board.update(secondMove, 8, 'X')
      expect(board.hasWinner(thirdMove)).toBe(true)
    })

    it('Knows three played moves on a diagonal is a winning move', () => {
      const state = board.newState()
      const firstMove = board.update(state, 3, 'X')
      const secondMove = board.update(firstMove, 5, 'X')
      const thirdMove = board.update(secondMove, 7, 'X')
      expect(board.hasWinner(thirdMove)).toBe(true)
    })
  })
})
