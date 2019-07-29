const { get } = require('./utils/state')

module.exports = state =>
  [
    '',
    divider,
    generateRow(state, [1, 2, 3]),
    divider,
    generateRow(state, [4, 5, 6]),
    divider,
    generateRow(state, [7, 8, 9]),
    divider,
    '',
  ].join('\n')

const generateRow = (state, squares) => {
  const generateSquare = position => get(state, position)

  return (
    '| ' +
    generateSquare(squares[0]) +
    ' | ' +
    generateSquare(squares[1]) +
    ' | ' +
    generateSquare(squares[2]) +
    ' |'
  )
}

const divider = '+-----------+'
