const mysql  = require('mysql');

//创建数据连接池
let pool = mysql.createPool({    
    host     : '127.0.0.1',   // 数据库地址
    user     : 'root',        // 数据库账号
    password : 'root',        // 数据库密码
    port     : '3306',        // 端口号
    database : 'demo'         // 数据库名
});

const dbtools = (sql, values) => {
    return new Promise((resolve, reject) => {
        // 在数据池中进行会话操作
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                // 执行sql脚本对数据库进行读写 
                connection.query(sql, values, (err, rows) => {
                    if ( err ) {
                        reject( err )
                    } else {
                        resolve( rows )
                    }
                    connection.release() // 结束会话
                })
            }
        })
    })
}

// 按需导出
module.exports = { dbtools }
