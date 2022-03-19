const http = require('http');
const libs = require('./libs');
const { errorHandler } = require('./responseHandler');
const getTodo = require('./getTodo');
const postTodo = require('./postTodo');
const patchTodo = require('./patchTodo');

const todos = []; // 代辦清單

const requestListener = (req, res) => {

    const { url, method } = req
    const { headers, message } = libs
    const data = {
        req,
        res,
        todos
    }

    if (url.startsWith("/todos") && method === "GET") {
        // getTodo.js
        getTodo(data)
    } else if (url === "/todos" && method === "POST") {
        // postTodo.js
        postTodo(data);
    } else if (url === "/todos" && method === "DELETE") {
        // deleteTodo.js
    } else if (url.startsWith("/todos/") && method === "DELETE") {
        // deleteTodo.js
    } else if (url.startsWith("/todos/") && method === "PATCH") {
        // patchTodo.js
        patchTodo(data);
    } else if (method === "OPTIONS") {
        res.writeHead(200, headers);
        res.end();
    } else {
        errorHandler(res, 404, message[404]);
    }
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3005);