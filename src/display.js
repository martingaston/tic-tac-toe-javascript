module.exports = {
  board: (state, board) =>
    [
      divider,
      generateRow(state, board, [1, 2, 3]),
      divider,
      generateRow(state, board, [4, 5, 6]),
      divider,
      generateRow(state, board, [7, 8, 9]),
      divider,
    ].join('\n'),
}

const generateRow = (state, board, squares) => {
  const generateSquare = position => board.get(state, position) || position

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
