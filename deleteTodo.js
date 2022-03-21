const { successHandler, errorHandler } = require('./responseHandler');
const { message } = require('./libs')

/** 刪除所有Todo資料
 */
const deleteTodos = (data) => {
    const { res, todos } = data
    todos.length = 0
    successHandler(res, todos);
}

/** 刪除單筆代辦
 * @param data requestListener 資訊與清單物件
 */
const deleteTodo = (data) => {
    const { req, res, todos } = data;
    /** http 傳來的 body 資訊 */
    let body = "";

    // 監聽 req 當 req 收到片段的 chunk 時，將片段資料加入 body 內。
    req.on('data', chunk => {
        body += chunk;
    });

    // 監聽 req 當 req 收完資料時，執行刪除單筆代辦的功能
    req.on('end', async () => {
        try {
            const id = req.url.split('/').pop();
            const index = todos.findIndex((todo) => todo.id === id);
            const { noData, wrongColumn } = message

            if(index !== -1){
                todos.splice(index, 1)
                successHandler(res, todos);
            }else{
                errorHandler(res, 400, noData);
            }
        } catch (err) {
            errorHandler(res, 400, err.message);
        }
    });
};

module.exports = {
    deleteTodo,
    deleteTodos
};