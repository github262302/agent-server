import express from 'express'
import os from 'os';

let app = express()
app.get("/", function (a, b) {
    // 返回请求头给页面
    console.log('----------')
    // 访问者ip
    console.log(a.ip);
    console.log(a.headers['user-agent']);
    console.log('----------')
    b.send(a.headers)
})
app.listen(6789, function () {
    // nodejs环境 打印出IP地址
    let keys = Object.keys(os.networkInterfaces());
    let data = os.networkInterfaces()
    for (let i = 0; i < keys.length; i++) {
        // 打印每一个ipv4 ip 
        for (let j = 0; j < data[keys[i]].length; j++) {
            if (data[keys[i]][j].family == "IPv4") {
                let ip = data[keys[i]][j].address
                let link=`http://${ip}:6789`
                // 打印蓝色的link
                console.log('\x1B[36m%s\x1B[0m',link)
            }
        }
    }
})
