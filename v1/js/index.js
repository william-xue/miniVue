function SelfVue (data, el, exp) {
    var self = this;
    this.data = data;
    //下边的功能是 将 数据都代理到 this 上 this.xxx=this.data[xxx]
    Object.keys(data).forEach(function(key) {
        self.proxyKeys(key);
    });

    observe(data);

    el.innerHTML = this.data[exp];  // 初始化模板数据的值
    //初始化的过程中 直接对watch进行new操作
    new Watcher(this, exp, function (value) {
        el.innerHTML = value;
    });  
     
    return this;

}

SelfVue.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function proxyGetter() {
                return self.data[key];
            },
            set: function proxySetter(newVal) {
                self.data[key] = newVal;
            }
        });
    }
}
