const start = require('../../src/cli/index')
const makeMove = require('../../src/cli/makeMove')

jest.mock('../../src/cli/makeMove')

describe('the start function', () => {
  let options, write, io
  beforeEach(() => {
    options = {
      messages: {
        title: 'title',
        intro: 'intro',
        instructions: 'instructions',
      },
    }
    write = jest.fn()
    io = {
      write,
    }
  })

  it('writes the title, intro and instructions messages', () => {
    start(options, io)
    expect(write).toHaveBeenCalledTimes(3)
    expect(write.mock.calls[0][0]).toEqual('title')
    expect(write.mock.calls[1][0]).toEqual('intro')
    expect(write.mock.calls[2][0]).toEqual('instructions')
  })

  it('calls makeMove', () => {
    start(options, io)
    expect(makeMove).toHaveBeenCalled()
  })
})
