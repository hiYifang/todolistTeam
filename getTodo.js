const { successHandler, errorHandler } = require('./responseHandler');
const { message } = require('./libs')

/** 錯誤控制
 * @param res requestListener 的參數 res
 * @param data 列表資料
 */
function getTodo(data) {
  const { req, res, todos } = data;
  const id = req.url.split('/').pop();

  if (id === 'todos') {
    successHandler(res, todos)
  } else {
    const index = todos.findIndex((todo) => todo.id === id);

    if ( index !== -1 ) {
      successHandler(res, todos[index]);
    } else {
      const { noData } = message
      errorHandler(res, 400, noData);
    }
  }
}

module.exports = getTodo;