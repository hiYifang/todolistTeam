const headers = {
    // cors 跨網域設定
    // Headers允許的資訊 Content-Type, Authorization, Content-Length, X-Requested-With
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    // 允許跨網域使用的方法 PATCH, POST, GET, OPTIONS, DELETE
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    // JSON格式的回傳設定
    'Content-Type': 'application/json'
}

/** 資源庫 */
const libs = {
    /** 表頭資訊 */
    headers: headers,
}

module.exports = libs;