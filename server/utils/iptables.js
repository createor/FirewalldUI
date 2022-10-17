// iptables模块
// var events = require('events');
// var eventEmitter = new events.eventEmitter();

// // 获取系统版本
// var osHandler = function getos(){

// }
// eventEmitter.on('get_os',osHandler);
var os = require("os")
function rules(rule){
    var release = os.release();
    // 查看防火墙是否允许

    // 清空已有规则
    os.
}

exports.rules = rules;