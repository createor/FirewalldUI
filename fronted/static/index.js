var initVar = (function ($){
    var getStatus = function(type){
        var flag;
        if(type == 0){
            var url = "/data/test1.json";
            var text = "<li><label>IP地址</label><label>连接状态</label></li>";
            var ele = "#established";
            flag = true;
        }else{
            var url = "/data/test2.json";
            var text = "<li><label>监听端口</label><label>服务进程</label></li>";
            var ele = "#service";
            flag = false;
        }
        $.ajax({
            url:url,
            type:"get",
            async:true,
            cache:false,
            success:function(data){
                if (flag){
                    for(let i=0;i<data.message.length;i++){
                        text = text + "<li><label>" + data.message[i].ip + "</label><label style='color:green;'>" + data.message[i].status + "</label></li>";
                    }
                }else{
                    for(let i=0;i<data.message.length;i++){
                        text = text + "<li><label>" + data.message[i].port + "</label><label>" + data.message[i].process + "</label></li>";
                    }
                }
                $(ele).html(text);
            }
        });
    }
    var init = function(){
        layui.use(['element','table','layer'],function(){
            var element = layui.element
            ,table = layui.table 
            ,layer = layui.layer;
            element.on('tab(menu)',function(data){
                $(".container .layui-tab-content .layui-tab-item").removeClass("layui-show");
                $(".container .layui-tab-content .layui-tab-item").eq(data.index).addClass("layui-show");
            });
            element.on('tab(status)',function(data){
                $(".left-nav .layui-tab-content .layui-tab-item").removeClass("layui-show");
                $(".left-nav .layui-tab-content .layui-tab-item").eq(data.index).addClass("layui-show");
                getStatus(data.index);
            });
            table.render({
                elem:"#exist-rule",
                height:300,
                url:"/data/test3.json",
                page:true,
                limit:30,
                loading:true,
                escape:true,
                cols:[[
                    {field:'id',title:'ID',width:60,sort:true,fixed:'left'},
                    {field:'table',title:'表',width:70},
                    {field:'chain',title:'链',width:80},
                    {field:'source_ip',title:'起始IP',width:120},
                    {field:'source_port',title:'起始端口',width:90},
                    {field:'dest_ip',title:'目的IP',width:120},
                    {field:'dest_port',title:'目的端口',width:90},
                    {field:'protocol',title:'协议',width:80},
                    {field:'action',title:'动作',width:100}
                ]],
                initSort:{
                    field:'id',
                    type:'asc'
                },
                text:{
                    none:'暂无相关数据'
                }
            });
        });
    }
    return {
        init:init
    }
})(layui.jquery);
