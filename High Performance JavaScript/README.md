## 1 加载和执行

- 当浏览器在执行 JavaScript 代码时，不能同时做其他任何事情。事实上，多数浏览器使用单一进程来处理用户界面（UI）刷新和 JavaScript 脚本执行，所以同一时刻只能做一件事。
- `defer` 属性仅当 `src` 属性声明时才生效。
- 通常来讲，把新创建的 `<script>` 标签添加到 `<head>` 标签里比添加到 `<body>` 里更保险，尤其是在页面加载过程中执行代码时更是如此。当 `<body>` 中的内容没有全部加载完成时，IE 可能会抛出一个“操作已中止”的错误信息。

## 2 数据存取

- 大多数情况下，从一个字面量和一个局部变量中存取数据的性能差异是微不足道的。访问数组元素和对象成员的代价则高一些，至于具体高出多少，很大程度上取决于浏览器。
- 函数每次执行时对应的执行环境都是独一无二的，所以多次调用同一个函数就会导致创建多个执行环境。当函数执行完毕，执行环境就被销毁。
- 每个执行环境都有自己的作用域链，用于解析标识符。当执行环境被创建时，它的作用域链初始化为当前运行函数的[[Scope]]属性中的对象。这些值按照它们出现在函数中的顺序，被复制到执行环境的作用域链中。这个过程一旦完成，一个被称为“活动对象（activation object）”的新对象就为执行环境创建好了。活动对象作为函数运行时的变量对象，包含了所有局部变量，命名参数，参数集合以及 `this`。然后此对象被推入作用域链的最前端。当执行环境被销毁，活动对象也随之销毁。
- 标识符解析是有代价的，事实上**没有哪种计算机操作可以不产生性能开销**。在执行环境的作用域链中，一个标识符所在的位置越深，它的读写速度也就越慢。因此，函数中读写局部变量总是最快的（局部变量存在于作用域链的起始位置），而读写全局变量通常是最慢的。请记住，全局变量总是存在于执行环境作用域链的最末端，因此它也是最远的。
- 通过把 `document` 对象传递给 `with` 语句，一个包含了 `document` 对象所有属性的新的可变变量被置于作用域链的头部。这使得访问 `document` 对象的属性非常快，而访问局部变量则变慢了。因此，最好避免使用 `with` 语句。
- `try-catch` 语句不应该被用来解决 JavaScript 错误。如果你知道某个错误经常出现，那说明是代码本身有问题，应该尽早被修复。
- 通常来说，函数的活动对象会随着执行环境一同销毁。但引入闭包时，由于引用仍然存在于闭包的[[Scope]]属性中，因此激活对象无法被销毁。这意味着脚本中的闭包与非闭包函数相比，需要更多的内存开销。
- 在频繁访问跨作用域的标识符时，每次访问都会带来性能损失。
- 搜索实例成员比从字面量或局部变量中读取数据代价更高，再加上遍历原型链带来的开销，这让性能问题更为严重。
- 每次遇到点操作符，嵌套成员会导致 `JavaScript` 引擎搜索所有对象成员。对象成员嵌套得越深，读取速度就会越慢。执行 `location.href` 总是比 `window.location.href` 要快，后者也比 `window.location.href.toString()` 要快。如果这些属性不是对象的实例属性，那么成员解析还需要搜索原型链，这会花更多的时间。

## 3 DOM 编程

- HTML 集合一直与文档保持着连接，每次你需要最新的信息时，都会重复执行查询的过程，哪怕只是获取集合里的元素个数（即访问集合的 length 属性）也是如此。这正是低效之源。
- DOM 树中的每一个需要显示的节点在渲染树中至少存在一个对应的节点（隐藏的 DOM 元素在渲染树中没有对应的节点）。
- 下述情况中会发生重排：1.添加或删除可见的 DOM 元素。2.元素位置改变。3.元素尺寸改变（包括：外边距、内边距、边框厚度、宽度、高度等属性改变）。4.内容改变，例如：文本改变或图片被另一个不同尺寸的图片代替。5.页面渲染器初始化。6.浏览器窗口尺寸改变。
- 当你需要对 DOM 元素进行一系列操作时，可以通过以下步骤来减少重绘和重排的次数：1.使元素脱离文档流。2.对其应用多重改变。3.把元素带回文档中。
- 有三种基本方法可以使 DOM 脱离文档：1.隐藏元素，应用修改，重新显示。2.使用文档片段（document fragment）在当前 DOM 之外构建一个子树，再把它拷贝回文档。3.将原始元素拷贝到一个脱离文档的节点中，修改副本，完成后再替换原始元素。
- 使用以下步骤可以避免页面中的大部分重排：1.使用绝对位置定位页面上的动画元素，将其脱离文档流。2.让元素动起来。当它扩大时，会临时覆盖部分页面。但这只是页面一个小区域的重绘过程，不会产生重排并重绘页面的大部分内容。3.当动画结束时恢复定位，从而只会下移一次文档的其他元素。

## 4 算法和流程控制

- 由于每次迭代操作会同时搜索实例或原型属性，`for-in` 循环的每次迭代都会产生更多开销，所以比其他循环类型要慢。
- 倒序循环是编程语言中一种通用的性能优化方法，但一般来说不是那么容易理解。实际上，控制条件已经从两次比较（迭代数少于总数吗？它是否为 `true`?）减少到一次比较（它是 `true` 吗？）。
- 大多数情况下 `switch` 比 `if-else` 运行得要快，但只有当条件数量很大时才快得明显。大多数的语言对 `switch` 语句的实现都采用了 branch table（分支表）索引来进行优化。

### 达夫设备（Duff's Device）

如果迭代数超过 1000，那么 Duff's Device 的执行效率将明显提升。例如在 500000 次迭代中，其运行时间比常规循环少 70%。

```
// credit: Jeff Greenberg
var i = items.length % 8;
while (i) {
    process(items[i--]);
}

i = Math.floor(items.length / 8);

while (i) {
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
    process(items[i--]);
}
```

## 5 字符串和正则表达式

- 除 IE 外，其他浏览器会尝试为表达式左侧的字符串分配更多的内存，然后简单地将第二个字符串拷贝至它的末尾。如果在一个循环中，基础字符串位于最左端的位置，就可以避免重复拷贝一个逐渐变大的基础字符串。
- 每当正则表达式做类似的决定时，如果有必要的话，都会记录其他选择，以备返回时使用。如果当前选项匹配成功，正则表达式继续扫描表达式，如果其他部分也匹配成功，那么匹配结束。但是如果当前选项找不到匹配值，或后面的部分匹配失败，那么正则表达式会回溯到最后一个决策点，然后在剩余的选项中选择一个。这个过程会一直进行，直到找到匹配项，或者正则表达式中量词和分支选项的所有排列组合都尝试失败，那么它将放弃匹配，转而移动到字符串中的下一个字符，再重复此过程。
- 字符集比分支更快，因为它使用位向量（或其他快速实现方式）而不是回溯。当分支必不可少时，将常用分支放到最前面，如果这样做不影响正则表达式匹配的话。分支选项从左到右依次尝试，一个选项被匹配到的机会越多，你越希望它尽快被检测到。

## 6 快速响应的用户界面

- 有两种方法可以度量脚本运行了多“长”。第一种是记录自脚本开始以来执行的语句的数量。这种方法意味着脚本在不同的机器上可能会有不同的运行时间，因为可用内存和 CPU 速度会影响单个语句的执行时间。第二种方法是记录脚本执行的总时长。在指定时间内可运行的脚本数量也因用户的机器性能而有所差异，但是到达执行时间后，脚本会停止运行。毫无疑问，不同浏览器检测长时间运行脚本的方法会略有不同。
- 尽管你尽了最大努力，但难免会有一些复杂的 JavaScript 任务不能在 100 毫秒或更短时间内完成。这个时候，最理想的方法是让出 UI 线程的控制权，使得 UI 可以更新。让出控制权意味着停止执行 JavaScript，使 UI 线程有机会更新，然后再继续执行 JavaScript。于是 JavaScript 定时器走进了我们的视野。
- JavaScript 和 UI 共享同一进程的部分原因是它们之间互相访问频繁，因此这些任务失控会导致糟糕的用户体验。

## 7 Ajax

- 当使用 XHR 发送数据到服务器时，GET 方式会更快。这是因为，对于少量数据而言，一个 GET 请求往服务器只发送一个数据包。而一个 POST 请求，至少要发送两个数据包，一个装载头信息，另一个装载 POST 正文。POST 更适合发送大量数据到服务器，因为它不关心额外数据包的数量，另一个原因是 IE 对 URL 长度有限制，它不可能使用过长的 GET 请求。

## 8 编程实践

- 每次调用 `eval()` 时都要创建一个新的解释器 / 编译器实例。同样的过程也发生在使用 `Function()`、`setTimeout()` 和 `setInterval()` 时，这必然使得代码执行的速度变慢。

### 位操作

JavaScript 中有四种位逻辑操作符：

1. Bitwise AND 按位与：两个操作数的对应位都是 1 时，则在该位返回 1。
2. Bitwise OR 按位或：两个操作数的对应位只要一个为 1 时，则在该位返回 1。
3. Bitwise XOR 按位异或：两个操作数的对应位只有一个为 1，则在该位返回 1。
4. Bitwise NOT 按位取反：遇 0 则返回 1，反之亦然。

如果你看到 32 位数字的二进制底层表示，你会发现偶数的最低位是 0，奇数的最低位是 1。这可以简单地通过让给定数字与数字 1 进行按位与运算判断出来。

```
for (var i = 0, len = rows.length; i < len; i++) {
    if (i & 1) {
        className = "odd";
    } else {
        className = "even";
    }
    // ...
}
```