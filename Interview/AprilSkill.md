## Browser/浏览器

### Process and Threads/浏览器的进程和线程

https://thiluxan.medium.com/how-web-browsers-use-process-threads-a5e560d42037

Like Chrome, Firefox also using the concepts of multi-threading inside each process. With the release of Firefox 54, Mozilla has completed its transition to a multi-threaded web browser. But the multi-threading concept in Firefox is bit different with that of Chrome. In Chrome it initialize separate process for each tabs. If 5 tabs are opened, then there will be 5 render processes running. It will result it consuming memory, when the no. of processes get increased.

For this problem, Firefox implemented a conservative approach. There will be 4 new processes created for 4 new processes. If an additional tab is opened, it will run using threads within the existing processes. Multiple tabs within a process share the browser engine that already exists in memory, instead of each creating their own. This will reduce the consumption of memory, as more memory needed if no. of processes increased.

### Browser Cache and Server Cache/前端有几种缓存方式？

https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching

Shared Caches: it is used for more than one user. Gateway caches, CDN, reverse proxy caches. `Last-Modified` header.

Private Caches: A single user. Browser. Except for first requests.

### PWA Cache/PWA 中如何做缓存？遇到不更新的情况怎么办？

https://developer.chrome.com/docs/workbox/caching-strategies-overview/

1. Cache only
2. Network only
3. Cache first, falling back to network
4. Network first, falling back to cache
5. Stale-while-revalidate

### 浏览器输入地址后做了哪些事情？

### 说说浏览器缓存 `localStorage`、`sessionStorage` 和 `cookie`？/讲讲 Cookie

## Network/网络协议

### HTTP Headers/Http 有哪些请求头？

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

### 了解 HTTP 协议吗？

### Difference between HTTP and HTTPS/HTTP 和 HTTPS 的区别？HTTPS 如何做的加密？

1. HTTPS 协议需要到 CA 申请证书，⼀般免费证书很少，需要交费。
2. HTTP 协议运⾏在 TCP 之上，所有传输的内容都是明⽂，HTTPS 运⾏在 SSL/TLS 之上，SSL/TLS 运⾏在 TCP 之上，所有传输的内容将被加密。
3. HTTP 和 HTTPS 使⽤的是完全不同的连接⽅式，⽤的端⼝也不⼀样，前者是 80，后者是 443。
4. HTTPS 可以有效的防⽌运营商劫持，解决了防劫持的⼀个⼤问题。

### Manage Headers of CDN/管理 CDN 资源的时候如何设置 Header 头？

```
ExamplesSetting cache expiry timeYou can control cache expiry time of your content.# 30 DAYS
<FilesMatch "\.(ico|pdf|flv|jpg|jpeg|png|gif|js|css|swf)$">
    Header add Cache-Control "max-age=2592000, public"
</FilesMatch>

# 2 DAYS
<FilesMatch "\.(xml|txt)$">
    Header add Cache-Control "max-age=172800, public, must-revalidate"
</FilesMatch>

# 2 HOURS
<FilesMatch "\.(html|htm)$">
    Header add Cache-Control "max-age=7200, must-revalidate"
</FilesMatch>

# NO CACHE
<FilesMatch "\.(html|htm)$">
    Header add Cache-Control "no-cache"
</FilesMatch>
After changing origin HTTP headers you might need to purge your content from the CDN cache as it is cached with the old HTTP headers. Please refer to Setting a Cache Expiry Time for more details on cache control on CDN end.Setting CORSYou can enable Cross Origin Resource Sharing (CORS).<FilesMatch ".(eot|ttf|otf|woff)$">
        Header set Access-Control-Allow-Origin "*"
</FilesMatch>
After changing origin HTTP headers you might need to purge your content from the CDN cache as it is cached with the old HTTP headers. Please refer here for more details.
```
### Cross-Origin/除了设置 Headers 还需要设置什么？

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

In response, the server returns a Access-Control-Allow-Origin header with Access-Control-Allow-Origin: *, which means that the resource can be accessed by any origin.

```
*1. 通过 jsonp 跨域
2. document.domain + iframe 跨域
3. location.hash + iframe
*4. window.name + iframe 跨域
*5. postMessage 跨域
6. 跨域资源共享（CORS）
*7. nginx 代理跨域（同个域名）
8. nodejs 中间件代理跨域
*9. WebSocket 协议跨域
```

### Simple Rquest

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests

https://medium.com/@f2004392/cors-preflight-request-options-9d05b9248e5a

As per the W3C specification(For HTTP request methods in particular, other than GET or POST with certain content types), browsers first makes the preflight (OPTIONS request ) in order to validate whether the supported methods are valid from the server. 

### HTTP Cache

https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching

The Cache-Control HTTP/1.1 general-header field is used to specify directives for caching mechanisms in both requests and responses. Use this header to define your caching policies with the variety of directives it provides.

You can use a large max-age value for files that rarely or never change. This might include images, HTML, CSS files, and JavaScript files.

---

When a validation request is made, the server can either ignore the validation request and respond with a normal 200 OK, or it can return 304 Not Modified (with an empty body) to instruct the browser to use its cached copy. The latter response can also include headers that update the expiration time of the cached resource.

## CSS

### Difference between Transitions and Animations/CSS 过渡和动画区别？

https://blog.hubspot.com/website/css-transition-vs-animation

### Difference between `:before` and `:after`/`:before` 和 `:after` 区别

The ::before and ::after pseudo-elements allow you to add content to a specific part of an element you have selected in a CSS rule. For instance, the ::before selector could be used to add text before a link. The ::after selector could be used to add an emoji after a paragraph of text.

### Pseudo-Elements/有哪些伪类？

https://www.w3schools.com/css/css_pseudo_elements.asp

### CSS Box Model

https://mazey.cn/t/ge

### BFC/了解 CSS 的 BFC 吗？

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context

https://blog.mazey.net/2068.html

### FLEX

https://mazey.cn/t/gf

The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. 

When we describe flexbox as being one dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column. This can be contrasted with the two-dimensional model of CSS Grid Layout, which controls columns and rows together.

### REM

https://www.sitepoint.com/understanding-and-using-rem-units-in-css/

CSS rem stands for “root em”.

### VW VH

https://www.w3schools.com/cssref/css_units.asp

## JavaScript

### `instanceof`/instanceof 用法？

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

```
object instanceof constructor

console.log([] instanceof Array);
// true
let literalString = 'This is a literal string';
let stringObject  = new String('String created with constructor');
literalString instanceof String;  // false, string literal is not a String
stringObject  instanceof String;  // true
literalString instanceof Object;  // false, string literal is not an Object
stringObject  instanceof Object;  // true
stringObject  instanceof Date;    // false
```
### Event Delegation/事件委托/代理是怎么回事？

https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983

Without event delegation you would have to rebind the click event listener to each new input loaded to the page. Coding this is complicated and burdensome. For one, it would drastically increase the amount of event listeners on your page, and more event listeners would increase the total memory footprint of your page. Having a larger memory footprint decreases performance… and poor performance is a bad thing. Second, there can be memory leak issues associated with binding and unbinding event listeners and removing elements from the dom. But that is beyond the scope of this article!

### Bubbling and Capturing/先触发冒泡还是先触发捕获？

https://javascript.info/bubbling-and-capturing

![Bubbling and Capturing](https://i.mazey.net/asset/default/eventflow.svg)

### 讲讲 this

### Promise 解决了什么问题，和 Async/Await 的区别？

### Map 和 WeakMap 的区别

### 什么时候会用到闭包？

### 宏任务和微任务的区别？

### JavaScript 是单线程还是多线程？

### Why `0.1 + 0.2 !== 0.3`/为什么 `0.1 + 0.2 !== 0.3`

在 JavaScript 中，数字只有 number 这一种类型；JavaScript 采用了 IEEE-745 浮点数表示法。我们先把 0.1 和 0.2 转换成二进制就是

- 0.1 => 0.0001 1001 1001 1001…（无限循环）
- 0.2 => 0.0011 0011 0011 0011…（无限循环）

双精度浮点数的小数部分最多支持 52 位，所以两者相加之后，再把它转换为十进制，就成了 0.30000000000000004

### Check the Type

The best way is to use the `typeof` keyword.

### Prototype Chain/说说作用域和原型链？

https://mazey.cn/t/gd

JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits just below null on the top of a prototype chain.

### Event Loop

https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.

At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

## Front-End Security/前端安全

### 前端安全问题有哪些？/前端常见的安全问题？

#### XSS (Cross Site Script)，跨站脚本攻击

原理：恶意攻击者往 Web ⻚⾯⾥插⼊恶意可执⾏⽹⻚脚本代码，当⽤户浏览该⻚之时，嵌⼊其中 Web ⾥⾯的脚本代码会被执⾏，从⽽可以达到恶意攻击用户的目的。

防范：对能接受⽤户输⼊的参数进⾏过滤和转义，并且严格管理 cookie 的读写权限。

#### CSRF (Cross-Site Request Forgery) 跨站请求伪造攻击

原理：利⽤⽹站对于⽤户⽹⻚浏览器的信任，挟持⽤户当前已登陆的 Web 应⽤程序，去执⾏并⾮⽤户本意的操作。

防范：验证 HTTP Referer 字段，并且为每个⽤户⽣成⼀个唯⼀的 token 进⾏验证。

## React

### The Order of Lifecycle Events between Parent Component and Children Component/父组件和子组件渲染顺序，其中埋点打印顺序？

https://stackoverflow.com/questions/58352375/what-is-the-correct-order-of-execution-of-useeffect-in-react-parent-and-child-co

You can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

So all of these lifecycle methods are called after the component is mounted and when component is mounted the child components inside that component have already been mounted and their lifeCycle have been called already.

https://stackoverflow.com/questions/44654982/in-which-order-are-parent-child-components-rendered

```
Parent constructor
Parent componentWillMount
Parent render start
Parent render end
Child1 constructor
Child1 componentWillMount
Child1 render
Child2 constructor
Child2 componentWillMount
Child2 render
Child1 componentDidMount
Child2 componentDidMount
Parent componentDidMount
```

### 虚拟 Dom 与 直接操作 Dom 的区别？什么时候用直接操作 Dom，什么时候用虚拟 Dom？

### React `useEffect`、`useLayoutEffect`、`render()`执行顺序？

### 子组件的事件如何传递给父组件？

### React Hooks 和 Class Component 区别？

### React Hooks 如何模拟生命周期？用的方法名叫什么？

### Optimizing React's Component/工作中做过哪些组件优化？/怎么减少组件更新频率？

https://juejin.cn/post/6965747225154732069

Fiber 本质上是一个虚拟的堆栈帧，新的调度器会按照优先级自由调度这些帧，从而将之前的同步渲染改成了异步渲染，在不影响体验的情况下去分段计算更新。

1. 组件卸载前进行清理操作
2. 减少渲染

#### 纯组件 PureComponent

纯组件会对组件输入数据进行浅层比较，如果当前输入数据和上次输入数据相同，组件不会重新渲染。
比较引用数据类型在内存中的地址是否相同，比较基本数据类型的值是否相同。
类组件继承 PureComponent，函数组件使用memo方法。

```
class PureChildComponent extends React.PureComponent { render() { console.log("PureChildComponent") return <div>{this.props.name}</div> } }
```

和进行diff比较操作相比，浅层比较将消耗更小的性能。 diff操作会重新遍历整棵 virtualDOM 树，而浅层比较只操作当前组件的state和props。

#### 深层比较 shouldComponentUpdate

纯组件只能进行浅层比较，要进行深层比较，使用 shouldComponentUpdate，它用于编写自定义逻辑。

```
shouldComponentUpdate(nextProps, nextState) { if (this.state.name !== nextState.name || this.state.age !== nextState.age) { return true } return false }
```

#### 函数组件变成纯组件 React.memo -> Hooks

将函数组件变成纯组件，将当前props 和上一次的 props 进行浅层比较，如果相同就阻止组件重新渲染。

```
function ShowName({ name }) { console.log("showName render...") return <div>{name}</div> } const ShowNameMemo = memo(ShowName)
```

#### 组件懒加载 lazy()

```
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "./Home"))
const List = lazy(() => import(/* webpackChunkName: "List" */ "./List"))
```

#### 使用 Fragment 避免额外标记

```
import { Fragment } from "react" function App() { return ( <Fragment> <div>message a</div> <div>message b</div> </Fragment> ) }
```

#### 不要使用内联函数定义

在使用内联函数后，render 方法每次运行时都会创建该函数的实例，导致 React 在进行 Virtual DOM 对比时，新旧函数对比不相等，导致 React 总是为元素绑定新的函数，而旧的函数实例又要交给垃圾回收器处理。

#### 避免使用内联样式属性

当使用内联 style 为元素添加样式时，内联 style 会被编译成 JavaScript 代码，通过 JavaScript 代码将样式规则映射到元素的身上，浏览器就会花费更多的时间执行脚本和渲染UI，从而增加了组件的渲染时间。

#### 避免重复无限渲染

当应用程序状态发生更改时，React 会调用 render 方法，如果在 render 方法中继续更改应用程序的状态，就会发生 render 方法递归调用导致应用报错。

#### 优化渲染条件

频繁地挂载和卸载组件是一项很耗性能的操作，为了确保应用程序的性能，应该减少组件挂载和卸载的次数。

#### 为组件创建错误边界 优化用户体验

错误边界是一个 React 组件，可以捕获子级组件在渲染时发生的错误，当错误发生时，可以将错误记录下来，可以显示备用UI界面。

#### 为列表数据添加唯一标识 key

当需要渲染列表数据时，我们应该为每一个列表项添加 key 属性，key 属性的值必须是唯一的。

key 属性可以让 React 直接了当地知道哪些列表项发生了变化，从而避免了 React 内部逐一遍历 Virtual DOM 查找变化所带来的性能消耗，避免了元素因为位置变化而导致的重新创建。

#### 依赖优化

按需加载。

### React communication between Components

1 父子通信

父组件通过 props 传递数据给子组件，子组件通过调用父组件传来的函数传递数据给父组件，这两种方式是最常用的父子通信实现办法。

这种父子通信方式也就是典型的单向数据流，父组件通过 props 传递数据，子组件不能直接修改 props， 而是必须通过调用父组件函数的方式告知父组件修改数据。

2 兄弟组件通信

对于这种情况可以通过共同的父组件来管理状态和事件函数。比如说其中一个兄弟组件调用父组件传递过来的事件函数修改父组件中的状态，然后父组件将状态传递给另一个兄弟组件。

3 跨多层次组件通信

如果你使用 16.3 以上版本的话，对于这种情况可以使用 Context API。

4 任意组件

这种方式可以通过 Redux 或者 Event Bus 解决，另外如果你不怕麻烦的话，可以使用这种方式解决上述所有的通信情况。

### Redux Introduction

https://medium.com/leanjs/introduction-to-redux-redux-explained-with-very-simple-examples-b39d7967ceb8

The three principles

1. The state of the app is stored in one JavaScript object.
2. The state is read-only, but we can change the state by describing a change with another JavaScript object called action.
3. Changes are executed by pure functions called reducers. A reducer accepts the current state and an action and returns a new state or the same state.

## Vue

### Vue 生命周期，渲染顺序？

![](https://blog.mazey.net/wp-content/uploads/2022/04/lifecycle-e1650872947145.png)

### Vue 和 React 和渲染更新有什么不同？/React 和 Vue 区别？各有什么优缺点？

### Vue3 有用过吗？

### 了解过 Vite 吗？

### Vue Communication/Vue 里面有几种通信方式？

https://blog.mazey.net/982.html

### `v-for` and `v-if` in Vue

https://vuejs.org/guide/essentials/conditional.html#v-if-with-v-for

When v-if and v-for are both used on the same element, v-if will be evaluated first.

https://stackoverflow.com/questions/48933606/v-for-and-v-if-not-working-together-in-vue-js

Why don't use the power of Computed Properties ?

If you don't mind your view continuing in the html with "display:none" you can use v-show together with v-for without any problems.

### `v-model`

https://learnvue.co/2021/01/everything-you-need-to-know-about-vue-v-model/#what-is-vue-v-model

Vue v-model is a directive that provides two-way data binding between an input and form data or between two components.

The difference between the two is that v-model provides two-way data binding.

However, v-bind only binds data one way.

By default, v-model syncs with the state of the Vue instance (data properties) on every input event. This includes things like gaining/losing focus, being blurred, etc.

---

We have our parent component setup, so let’s access it from our child component.

There are two things we have to do inside CustomTextInput.vue:

- Accept our v-model value as a prop
- Emit an update event when our input changes

### From `template` to VDOM

https://vuejs.org/guide/extras/rendering-mechanism.html#rendering-mechanism

Here, vnode is a plain JavaScript object (a "virtual node") representing a <div> element. It contains all the information that we need to create the actual element. It also contains more children vnodes, which makes it the root of a virtual DOM tree.

A runtime renderer can walk a virtual DOM tree and construct a real DOM tree from it. This process is called mount.

If we have two copies of virtual DOM trees, the renderer can also walk and compare the two trees, figuring out the differences, and apply those changes to the actual DOM. This process is called patch, also known as "diffing" or "reconciliation".

The main benefit of virtual DOM is that it gives the developer the ability to programmatically create, inspect and compose desired UI structures in a declarative way, while leaving the direct DOM manipulation to the renderer.

---

```
<div>
  <div>foo</div> <!-- hoisted -->
  <div>bar</div> <!-- hoisted -->
  <div>{{ dynamic }}</div>
</div>
```

The foo and bar divs are static - re-creating vnodes and diffing them on each re-render is unnecessary. The Vue compiler automatically hoists their vnode creation calls out of the render function, and reuses the same vnodes on every render. The renderer is also able to completely skip diffing them when it notices the old vnode and the new vnode are the same one.

In addition, when there are enough consecutive static elements, they will be condensed into a single "static vnode" that contains the plain HTML string for all these nodes (Example). These static vnodes are mounted by directly setting innerHTML. They also cache their corresponding DOM nodes on initial mount - if the same piece of content is reused elsewhere in the app, new DOM nodes are created using native cloneNode(), which is extremely efficient.

## Webpack

### Webpack 打包构建速度如何优化？

### Webpack 中 loader 和 plugin 区别？

### Webpack Loader Plugin/Webpack 有哪些常用的 Loader 和 Plugin

https://linguinecode.com/post/top-webpack-plugins

## NPM

### `peerDependencies` 和 `dependencies` 的区别

https://blog.mazey.net/1623.html

### NPM Test/NPM 的单测做过吗？

https://github.com/facebook/jest

### How to update NPM/如何进行的升级？/NPM 如何更新版本

https://bytearcher.com/articles/semver-explained-why-theres-a-caret-in-my-package-json/

- y.x.x - major - backward-incompatible change increments the major number
- x.y.x - minor - new functionality that is backward compatible increments the minor number
- x.x.y - patch - simple bug fix to existing functionality increments the patch number

首次 npm install：

caret (^) - ^3.9.2 - 3.*.*
tilde (~) - ~3.9.2 - 3.9.*

如果已经安装过了，需要 npm update 来更新。

## Node.js

### Node.js 和 Golang 处理多线程的区别？

### Node.js 如何进行多线程工作？数据如何共享传递？

### Node.js 需要考虑哪些风险？面对 DDOS 怎么办？

### Difference between `import` and `require`/import 和 require 的区别？esModule 的原理？

https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x

#### load

You can't selectively load only the pieces you need with require but with import, you can selectively load only the pieces you need, which can save memory.Loading is synchronous(step by step) for require on the other hand import can be asynchronous(without waiting for previous import) so it can perform a little better than require.

#### size

Major difference is in require, entire JS file is called or included. Even if you don't need some part of it.

### Relative of Egg.js and Koa/Egg.js 与 Koa 的关系

https://www.eggjs.org/intro/egg-and-koa

Egg is built around the Koa. On the basis of Koa model, Egg implements enhancements one step further.

### Koa's Onion Model/讲一讲 Koa 的洋葱模型

https://developpaper.com/node-koas-onion-model-in-simple-terms/

The onion model refers to next() The function is a split point, which is executed from outside to inside first Request And then execute from the inside out Response The logic of. Through the onion model, the communication between multiple middleware becomes more feasible and simple. The principle of its implementation is not very complex, mainly compose method.

![Koa's Onion Model](https://blog.mazey.net/wp-content/uploads/2022/04/68747470733a2f2f7261772e6769746875622e636f6d2f66656e676d6b322f6b6f612d67756964652f6d61737465722f6f6e696f6e2e706e67.png)

All the requests will be executed twice during one middleware. Compared to Express middleware, it is very easy to implement post-processing logic. You can obviously feel the advantage of Koa middleware model by comparing the compress middleware implementatio in Koa and Express.

## MySQL

### MySQL 中如何解决性能问题？如何建索引？

### MySQL 慢查询如何解决？

## Design/技术方案

### 如何处理异步？比如队列进行，一直有 10 个任务在运行？

https://blog.xizhibei.me/2019/07/15/asynchronous-task-queue-in-golang/

Worker pool

### 你会如何优化一个前端项目？/前端项目怎么优化？

### 国际化是如何实现的？/多语言是动态获取还是编译阶段实现的？

### 点击一个按钮页面卡顿住了，如何排查原因？

## Algorithm/算法

### 如何判断一个字符串是回文？说一下思路。

## Project/项目经历

### 讲一讲 XXXX 的优化？折损率是什么意思？

### XXXX 是公益性质的吗？

### XXXX 里面的错误监控怎么做的？

### 讲讲 XXXX 你都做了什么？如果继续做，你有什么优化方案？

### 最近有没有做什么涉及系统设计方面的工作？

### XXXX 中数据是真实的吗？

## Soft Skills/软能力

### 一份工作，你更注重什么？

### 最近学习什么新技术？

### 工作中如何让组员按需发展？如何培养组员？

### 接手一个新项目你会怎么做？

### 如果产品经理，提很多需求，你会怎么办？

### 产品的不合理需求如何处理？

### 如何跨部门协作？如何让别人协作你？

### 如果你学习其他技能的话，那你的自身技能（前端）不就落后其他人了吗？毕竟每个人的精力是有限的？

### 你的前端深度如何？

### 说说最近项目中比较有技术含量的是哪个？

### 从最近工作中学到什么？

### 刚接手一个项目，你会怎么做？

### 你的职业发展如何计划的？

### 最近的看的哪些书呢？

### 最近有研究哪些新技术？

### 谈谈遇到过的难解决的问题？

### 手上还有在谈的 offer 吗？面试情况如何？

(end)
