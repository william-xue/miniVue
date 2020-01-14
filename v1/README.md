/*
 * @Author: freeze.xue 
 * @Date: 2020-01-03 11:56:50 
 * @Last Modified by: freeze.xue
 * @Last Modified time: 2020-01-14 10:07:33
 */

> 模版编译那块还需要继续，又有新知了
> 1.new vue的同时 new watch 
> 2.对数据进行数据追踪的时候  对 key 不仅有get  set操作 a同时还有一个与之伴随的 dep 实例 用来收集 观察此 key的值 改变的 watcher b初始化 dep.target=null 全局变量 让后续的new watch使用
> 3.new watch的时候 在构造函数中 有this.value = this.get() 这步 this.get()方法 会去触发 绑定在模版里的 属性表达式 => data(exp) 来触发 数据追踪中的 getter 继而可以 完整2之步骤

