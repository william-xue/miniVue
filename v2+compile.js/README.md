# self-vue第二个版本
> 现对{{xxxx}}这种模版来替代
#   compileText: function(node, exp) {
#       var self = this;
#       var initText = this.vm[exp];
#       this.updateText(node, initText);  // 将初始化的数据初始化到视图中
#       new Watcher(this.vm, exp, function (value) { // 生成订阅器并绑定更新函数
#           self.updateText(node, value);
#       });
#   },

 
    get: function() {
        Dep.target = this;  // 缓存自己
        var value = this.vm.data[this.exp]  // 强制执行监听器里的get函数 
        Dep.target = null;  // 释放自己
        return value;
> 是有模版编译的时候 解析 exp 然后 new watch 然后自动触发数据追踪来添加到dep里