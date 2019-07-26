module.exports = {
  chooseMove: (board, state) => {
    const available = board.available(state)
    const index = randomNumberGenerator(available.length)

    return available[index]
  },
}

const randomNumberGenerator = maxNumberExclusive =>
  Math.floor(Math.random() * maxNumberExclusive)
