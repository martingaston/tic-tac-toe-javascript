const getValidatedMove = require('../../src/cli/getValidatedMove')
const getInput = require('../../src/cli/getInput')
const game = require('../../src/game')

jest.mock('../../src/cli/getInput')

describe('the getValidatedMove function', () => {
  let board, messages
  const io = {
    in: process.stdin,
    out: process.stdout,
    write: console.log,
  }

  beforeEach(() => {
    jest.resetAllMocks()

    const options = game.init()
    board = options.board
    messages = options.messages
  })

  it('will handle valid input', async () => {
    const move = '1'
    getInput.mockResolvedValue(move)
    const result = await getValidatedMove(board, messages.turn, io)

    expect(result).toBe(1)
  })

  it('will recursively call itself if invalid input is provided', async () => {
    getInput.mockResolvedValueOnce('-5')
    getInput.mockResolvedValueOnce('cat')
    getInput.mockResolvedValueOnce('10')
    getInput.mockResolvedValueOnce('2')

    const result = await getValidatedMove(board, messages.turn, io)
    expect(getInput.mock.calls.length).toBe(4)
    expect(result).toBe(2)
  })
})
