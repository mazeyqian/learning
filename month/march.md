## 三月面试总结

### 1.栈和堆的区别

#### 栈（stack）

由系统自动分配和释放，当定义一个作用域内的变量脱离作用域则释放，数据结构先进后出，类似于数据结构中的栈。

#### 堆（heap）

由程序员分配和释放，若不手动释放，则在程序运行结束时回收，没有固定的排序，数据结构类似于链表。

### 2.浮动元素引起的问题和解决办法

[浮动元素引起的问题和解决办法](//blog.mazey.net/903.html)

### 3.如何实现浏览器内多个标签页之间的通信

#### localStorage

使用`localStorage.setItem(key,value);`添加内容，使用storage事件监听添加、修改、删除的动作。

```
window.addEventListener("storage", function(event){
    $("#name").val(event.key + '=' + event.newValue);
});
```

#### cookie

动态获取cookie中的内容。

### 4.渐进增强和优雅降级

[渐进增强与优雅降级](https://segmentfault.com/a/1190000008860347)

### 5.事件冒泡和事件捕获

#### 事件冒泡

触发顺序自内向外。

#### 事件捕获

触发顺序自外向内。

#### 阻止事件冒泡

> 绑定事件方法（addEventListener）的第三个参数，就是控制事件触发顺序是否为事件捕获。true,事件捕获；false,事件冒泡。默认false,即事件冒泡。

event.stopPropagation()方法将停止事件的传播，阻止它被分派到其他 Document 节点。

### 6.请解释什么是事件代理

