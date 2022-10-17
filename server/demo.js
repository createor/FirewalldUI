// iptable和firewalld可视化配置
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var execCmd = require("child_process").exec;
var os = require("os");

var dataParser = bodyParser.json();
// 查看版本
var release = os.release();


function cmdByCode(cmd) {
    // linux执行命令
    var code;
    var result;
    execCmd(cmd,function (err,stdout,stderr) {
        if(err){
            result = stderr;
            code = -1;
        }else{
            result = stdout;
            code = 0;
        }
    });
    return code,result;
}

// 
app.get("/api/v1/status",function(req,res){
    
});

// 
app.post("/api/v1/addrule",dataParser,function(req,res){
    var body = req.body;
    // var src_addr = body.src.ip;
    // var src_port = body.src.port;
    // var dst_addr = body.dst.ip;
    // var dst_port = body.dst.port;
    // var protocol = body.protocol;
    // var action = body.action;
    // var rule = "";
    // console.log(src_addr,src_port,dst_addr,dst_port,protocol,action);
    var cmdStr = "ifconfig"
    var status,message = cmdByCode(cmdStr);
    var data = {
        "version":release,
        "ststus":status,
        "message":message
    }
    res.send(data);
});

var server = app.listen(8889);