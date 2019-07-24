const { get } = require('../../../src/cli/utils/state')
const board = require('../../../src/game/board')

describe('the get function', () => {
  it('can retreive the contents of board square', () => {
    let state = board.newState()
    const position = 1
    state = board.update(state, position, 'X')
    expect(get(state, position)).toEqual('X')
  })

  it('returns the position if the square is empty', () => {
    let state = board.newState()
    const position = 9

    expect(get(state, position)).toEqual(9)
  })

  it('will return any position even if it does not exist on the board', () => {
    let state = board.newState()
    const position = 100

    expect(get(state, position)).toEqual(100)
  })
})
