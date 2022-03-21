const http = require('http');
const libs = require('./libs');
const { errorHandler } = require('./responseHandler');
const { getTodo, getTodos } = require('./getTodo');
const postTodo = require('./postTodo');
const patchTodo = require('./patchTodo');
/** 代辦清單 */
const todos = []

const requestListener = (req, res) => {
  const { url, method } = req
  const { headers, message } = libs
  /** requestListener 資訊與清單物件 */
  const data = {
    /** requestListener req */
    req,
    /** requestListener res */
    res,
    /** 代辦清單 */
    todos
  }

  if (url === "/todos" && method === "GET") {
    getTodos(data)
  } else if (url.startsWith("/todos/") && method === "GET") {
    getTodo(data)
  } else if (url === "/todos" && method === "POST") {
    postTodo(data)
  } else if (url === "/todos" && method === "DELETE") {
    // deleteTodo.js
  } else if (url.startsWith("/todos/") && method === "DELETE") {
    // deleteTodo.js
  } else if (url.startsWith("/todos/") && method === "PATCH") {
    patchTodo(data)
  } else if (method === "OPTIONS") {
    res.writeHead(200, headers)
    res.end()
  } else {
    errorHandler(res, 404, message[404])
  }
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3005);