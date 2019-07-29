const play = require('../../src/cli/play')
const gameOver = require('../../src/cli/gameOver')
const getMove = require('../../src/cli/getMove')
const game = require('../../src/game')

jest.mock('../../src/game')
jest.mock('../../src/cli/gameOver')
jest.mock('../../src/cli/getMove')

describe('the makeMove function', () => {
  let options, write, io
  beforeEach(() => {
    jest.resetAllMocks()

    game.init.mockReturnValue({
      isActive: true,
      state: [],
      messages: {
        turn: 'test',
      },
    })

    game.update.mockReturnValue({
      isActive: false,
    })

    options = game.init()
    write = jest.fn()
    io = {
      input: process.stdin,
      output: process.stdout,
      write,
    }
  })

  it('draws the board', () => {
    play(options, game.update, io)
    expect(write).toHaveBeenCalled()
  })

  it('calls gameOver if the game is finished', () => {
    options.isActive = false

    play(options, game.update, io)
    expect(gameOver).toHaveBeenCalled()
  })

  it('will call itself recursively until the game is over', async () => {
    const userInput = '5'
    getMove.mockResolvedValue(userInput)
    await play(options, game.update, io)
    expect(gameOver).toHaveBeenCalled()
  })
})
