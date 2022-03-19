const { successHandler } = require('./responseHandler');

/** 錯誤控制
 * @param res requestListener 的參數 res
 * @param data 列表資料
 */
function getTodo(res, data) {
  successHandler(res, data)
}

module.exports = getTodo;