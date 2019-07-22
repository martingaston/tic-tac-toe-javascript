module.exports = class Board {
  static new() {
    const threeByThreeTotalSquares = 9
    return Array.from({ length: threeByThreeTotalSquares }).fill(null)
  }

  static update(board, position, mark) {
    const leftHalfFinish = position - 1
    const rightHalfStart = position

    return [
      ...board.slice(0, leftHalfFinish),
      mark,
      ...board.slice(rightHalfStart),
    ]
  }

  static get(board, position) {
    const zeroIndexedPosition = position - 1
    return board[zeroIndexedPosition] || ''
  }

  static hasWinner(board) {
    const winningMoves = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ]

    const get = i => Board.get(board, i)

    const hasWinningCombination = winningMoves.filter(
      move =>
        get(move[0]) != '' &&
        get(move[0]) == get(move[1]) &&
        get(move[1]) == get(move[2])
    )

    return hasWinningCombination.length > 0 ? true : false
  }

  static available(board) {
    return board.reduce(
      (available, currentSquare, index) =>
        currentSquare != null ? available : available.concat(index + 1),
      []
    )
  }
}
