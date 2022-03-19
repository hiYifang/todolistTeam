const libs = require('./libs')

function getTodo(res, data) {
  res.writeHead(200, libs.headers)
  res.write(JSON.stringify({
    "status": "success",
    "data": data
  }))
  res.end()
}

module.exports = getTodo;