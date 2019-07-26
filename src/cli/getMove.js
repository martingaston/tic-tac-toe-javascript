const readline = require('readline')

module.exports = (input, output, query = '') => {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input,
      output,
      query,
    })

    rl.question(query, answer => {
      rl.close()
      resolve(answer)
    })
  })
}
