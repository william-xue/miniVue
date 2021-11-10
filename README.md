/*
 * @Author: freeze.xue 
 * @Date: 2021-11-10 16:56:01 
 * @Last Modified by:   freeze.xue 
 * @Last Modified time: 2021-11-10 16:56:01 
 */
现在来回味一下 更加深刻
/*
 * @Author: freeze.xue 
 * @Date: 2020-04-07 14:57:45 
 * @Last Modified by: freeze.xue
 * @Last Modified time: 2020-04-07 15:33:20
 */
> 理解下最原始的观察者模式对理解vue的实现很有帮助
> 这个解析可以看看 https://www.jianshu.com/p/0d807e4752a0
/*
 * @Author: freeze.xue 
 * @Date: 2019-07-09 15:41:12 
 * @Last Modified by: freeze.xue
 * @Last Modified time: 2020-04-07 14:56:04
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

