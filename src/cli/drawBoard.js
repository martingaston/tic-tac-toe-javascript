const { get } = require('./utils/state')

module.exports = board =>
  [
    '',
    divider,
    generateRow(board, [1, 2, 3]),
    divider,
    generateRow(board, [4, 5, 6]),
    divider,
    generateRow(board, [7, 8, 9]),
    divider,
    '',
  ].join('\n')

const generateRow = (board, squares) => {
  const generateSquare = position => get(board, position)

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
