const update = require('../../src/game/update')
const board = require('../../src/game/board')
const game = require('../../src/game')

describe('the update function', () => {
  it('updates the board state', () => {
    const options = game.init()
    const position = 1

    const { state } = update(position, options)

    expect(board.get(state, position)).toEqual(options.currentPlayer)
  })

  it('swaps the players', () => {
    const turnZero = game.init()
    const firstMove = 1
    const secondMove = 2

    const turnOne = update(firstMove, turnZero)
    const playerNought = turnOne.currentPlayer

    const turnTwo = update(secondMove, turnOne)
    const playerCross = turnTwo.currentPlayer

    expect(playerNought).toEqual('O')
    expect(playerCross).toEqual('X')
  })

  it('updates the turn message', () => {
    const turnZero = game.init()
    const turnOne = update(1, turnZero)

    expect(turnZero.messages.turn).toMatch(/X/)
    expect(turnOne.messages.turn).toMatch(/O/)
  })

  it('updates isActive in the case of a win', () => {
    const turnZero = game.init()
    const turnOneCross = update(1, turnZero)
    const turnTwoNought = update(7, turnOneCross)
    const turnThreeCross = update(2, turnTwoNought)
    const turnFourNought = update(8, turnThreeCross)
    const turnFiveCross = update(3, turnFourNought)

    expect(turnFourNought.isActive).toEqual(true)
    expect(turnFiveCross.isActive).toEqual(false)
  })

  it('updates isActive in the case of a draw', () => {
    const turnZero = game.init()
    const turnOneCross = update(1, turnZero)
    const turnTwoNought = update(5, turnOneCross)
    const turnThreeCross = update(4, turnTwoNought)
    const turnFourNought = update(7, turnThreeCross)
    const turnFiveCross = update(8, turnFourNought)
    const turnSixNought = update(2, turnFiveCross)
    const turnSevenCross = update(9, turnSixNought)
    const turnEightNought = update(6, turnSevenCross)
    const turnNineCross = update(3, turnEightNought)

    expect(turnNineCross.isActive).toEqual(false)
  })
})
