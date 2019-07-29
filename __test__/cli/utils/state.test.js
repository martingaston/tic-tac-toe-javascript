const { get } = require('../../../src/cli/utils/state')
const referee = require('../../../src/game/referee')

describe('the get function', () => {
  it('can retreive the contents of board square', () => {
    let board = referee.create()
    const position = 1
    board = referee.update(board, position, 'X')
    expect(get(board, position)).toEqual('X')
  })

  it('returns the position if the square is empty', () => {
    let board = referee.create()
    const position = 9

    expect(get(board, position)).toEqual(9)
  })

  it('will return any position even if it does not exist on the board', () => {
    let board = referee.create()
    const position = 100

    expect(get(board, position)).toEqual(100)
  })
})
