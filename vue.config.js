//vue-cli的配置文件
module.exports = {
    devServer: {
        proxy:{
            "/api":{
                //假设这是后端接口
                target: "http://abcdefg-kk.com",
            }
        }
    }
}