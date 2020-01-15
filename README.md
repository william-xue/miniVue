/*
 * @Author: freeze.xue 
 * @Date: 2019-07-09 15:41:12 
 * @Last Modified by: freeze.xue
 * @Last Modified time: 2019-07-09 15:41:38
 */
>1.new调用过程与直接调用的区别 以及 箭头函数
>2.watch与数据劫持的绑定 这点很巧妙 
>>再度体会

>大神原有学习地址https://www.cnblogs.com/axl234/p/7753108.html
/*
 * @Author: freeze.xue 
 * @Date: 2018-08-16 15:56:38 
 * @Last Modified by: freeze.xue
 * @Last Modified time: 2019-07-09 15:40:34
 */


>订阅者Watcher在初始化的时候需要将自己添加进订阅器Dep中，那该如何添加呢？我们已经知道监听器Observer是在get函数执行了添加订阅者Wather的操作的，所以我们只要在订阅者Watcher初始化的时候触发对应的get函数去执行添加订阅者操作即可，那要如何触发get的函数，再简单不过了，只要获取对应的属性值就可以触发了，核心原因就是因为我们使用了Object.defineProperty( )进行数据监听。这里还有一个细节点需要处理，我们只要在订阅者Watcher初始化的时候才需要添加订阅者，所以需要做一个判断操作，因此可以在订阅器上做一下手脚：在Dep.target上缓存下订阅者，添加成功后再将其去掉就可以了

https://github.com/canfoo/self-vue/blob/master/v3/js/compile.js 
处理watch 新值 旧值。资料那么多 在于自己吸收 思考 并应用才行

