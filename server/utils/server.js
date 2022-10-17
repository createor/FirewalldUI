// 基于nodejs的iptables和firewalld的配置工具
var http = require("http");
var url = require("url");
var port = 8888
var router = require("./router");

function start(route){
    http.createServer(function (request,response){
        res = route(request);
        response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        response.writeHead(res.toString());
        response.end();
    }).listen(port);
}
start(router.route)