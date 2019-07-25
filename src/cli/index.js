const game = require('../game/')
const display = require('./display')
const getMove = require('./getMove')

const start = (options, io) => {
  const { messages } = options
  const { print } = io

  print(messages.title)
  print(messages.intro)
  print(messages.instructions)

  makeMove(options, io)
}

const makeMove = async (options, io) => {
  const { isActive, state, messages } = options
  const { input, output, write } = io

  if (!isActive) {
    return gameOver(options, io)
  }

  write(display.board(state))

  const position = await getMove(input, output, messages.turn)

  update(position, options, io)
}

const update = (position, options, io) => {
  const updatedOptions = game.update(position, options)
  makeMove(updatedOptions, io)
}

const gameOver = (options, io) => {
  const { state, messages } = options
  const { write } = io

  write(display.board(state))
  write(messages.ending)
}

if (require.main === module) {
  const io = {
    in: process.stdin,
    out: process.stdout,
    write: console.log,
  }

  const options = game.init()
  start(options, io)
}
