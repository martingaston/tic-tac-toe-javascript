const getInput = require('../../src/cli/getInput')
const Readable = require('stream').Readable

const spy = jest.fn()
const mockReadable = new Readable({
  read: function() {
    return this.push(spy())
  },
})

describe('the getInput function', () => {
  it('can get user input', async () => {
    spy.mockReturnValueOnce('hello 1\n')
    const firstResult = await getInput(mockReadable, null)
    spy.mockReturnValueOnce('hello 2\n')
    const secondResult = await getInput(mockReadable, null)

    expect(firstResult).toBe('hello 1')
    expect(secondResult).toBe('hello 2')
    expect(spy).toHaveBeenCalled()
  })
})
