const http = require('http');
const { v4: uuidv4 } = require('uuid');
const errHandle = require('./errorHandle');
const libs = require('./libs');

const todos = [];

const requestListener = (req, res)=>{
    
    let body = "";
    
    req.on('data', chunk=>{
        body+=chunk;
    })
    
    if(req.url=="/todos" && req.method == "GET"){
        // getTodo.js
    }else if(req.url=="/todos" && req.method == "POST"){
        // postTodo.js
    }else if(req.url=="/todos" && req.method == "DELETE"){
        // deleteTodo.js
    }else if(req.url.startsWith("/todos/") && req.method=="DELETE"){
        // deleteTodo.js
    }else if(req.url.startsWith("/todos/") && req.method=="PATCH"){
        // patchTodo.js
    }else if(req.method == "OPTIONS"){
        res.writeHead(200, libs.headers);
        res.end();
    }else{
        res.writeHead(404, libs.headers);
        res.write(JSON.stringify({
            "status": "false",
            "message": "無此網站路由"
        }));
        res.end();
    }
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3005);