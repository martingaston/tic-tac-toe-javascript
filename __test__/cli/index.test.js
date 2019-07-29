const start = require('../../src/cli/index')
const play = require('../../src/cli/play')

jest.mock('../../src/cli/play')

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

  it('calls makeMove with two arguments', () => {
    start(options, io)
    expect(play).toHaveBeenCalledWith(options, io)
  })
})
