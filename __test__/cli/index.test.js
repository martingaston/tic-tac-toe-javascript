const start = require('../../src/cli/index')
const makeMove = require('../../src/cli/makeMove')

jest.mock('../../src/cli/makeMove')

describe('the start function', () => {
  let options, write, updater, io
  beforeEach(() => {
    options = {
      messages: {
        title: 'title',
        intro: 'intro',
        instructions: 'instructions',
      },
    }
    updater = jest.fn()
    write = jest.fn()
    io = {
      write,
    }
  })

  it('writes the title, intro and instructions messages', () => {
    start(options, updater, io)
    expect(write).toHaveBeenCalledTimes(3)
    expect(write.mock.calls[0][0]).toEqual('title')
    expect(write.mock.calls[1][0]).toEqual('intro')
    expect(write.mock.calls[2][0]).toEqual('instructions')
  })

  it('calls makeMove with three arguments', () => {
    start(options, updater, io)
    expect(makeMove).toHaveBeenCalledWith(options, updater, io)
  })
})
