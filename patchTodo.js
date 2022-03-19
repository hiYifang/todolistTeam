const { successHandler, errorHandler } = require('./responseHandler');

module.exports = function(data) {
  const { req, res, todos } = data;
  let body = "";

  req.on('data', chunk => {
      body += chunk;
  });

  req.on('end', () => {
    try {
        const { title } = JSON.parse(body);

        if ( title ) {
          const id = req.url.split('/').pop();
          const index = todos.findIndex((todo) => todo.id === id);

          if ( index !== -1 ) {
            todos[index].title = title;
            successHandler(res, todos);
          } else {
            errorHandler(res, 400, '無此資料');
          }
        } else {
            errorHandler(res, 400, '欄位未填寫正確');
        }
    } catch(err) {
      errorHandler(res, 400, err.message);
    }
  });
};
