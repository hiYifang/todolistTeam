const libs = require('./libs')

/** 錯誤控制
 * @param res requestListener 的參數 res
 */
function errorHandle(res){
    res.writeHead(400, libs.headers);
    res.write(JSON.stringify(
        {
            "status": "false",
            "message": "欄位未填寫正確，或無此 todo ID"
        }
    ));
    res.end();
}

module.exports = errorHandle;