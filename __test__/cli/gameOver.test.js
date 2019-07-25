const gameOver = require('../../src/cli/gameOver')
const game = require('../../src/game')

describe('the gameOver module', () => {
  it('displays the board and then the ending message', () => {
    const options = game.init()
    options.messages.ending = 'Player Test Wins!'
    const write = jest.fn()
    const io = { write }

    gameOver(options, io)

    expect(write).toHaveBeenCalledTimes(2)
  })
})
