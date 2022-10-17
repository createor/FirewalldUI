// 路由模块
var querystring = require("querystring");

function route(req){
    var path = url.parse(req.url);
    // 路由路径
    var pathname = path.pathname;
    // 请求方法
    var method = path;
    // 请求参数
    var query = path.query;
    // 请求body
    if (pathname == '/test'){
        // var params = querystring.parse
        console.log("111");
    }else if (pathname == ''){

    }
}

exports.route = route;