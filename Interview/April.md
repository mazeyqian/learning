## 四月面试准备

### CSS Box Model

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

### BFC

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context

### FLEX

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

The Flexible Box Module, usually referred to as flexbox, was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. 

When we describe flexbox as being one dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column. This can be contrasted with the two-dimensional model of CSS Grid Layout, which controls columns and rows together.

### REM

https://www.sitepoint.com/understanding-and-using-rem-units-in-css/

CSS rem stands for “root em”.

### VW VH

https://www.w3schools.com/cssref/css_units.asp

### Check the Type

The best way is to use the `typeof` keyword.

### Prototype Chain

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are instances of Object which sits just below null on the top of a prototype chain.

### Event Loop

https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.

At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

### `v-for`&`v-if` in Vue

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

### from `template` to VDOM

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

### Webpack Loader Plugin

https://linguinecode.com/post/top-webpack-plugins

### HTTP Cache

https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching

The Cache-Control HTTP/1.1 general-header field is used to specify directives for caching mechanisms in both requests and responses. Use this header to define your caching policies with the variety of directives it provides.

You can use a large max-age value for files that rarely or never change. This might include images, HTML, CSS files, and JavaScript files.

---

When a validation request is made, the server can either ignore the validation request and respond with a normal 200 OK, or it can return 304 Not Modified (with an empty body) to instruct the browser to use its cached copy. The latter response can also include headers that update the expiration time of the cached resource.

### Cross-Origin

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
*7. nginx 代理跨域
8. nodejs 中间件代理跨域
*9. WebSocket 协议跨域
```

### Simple Rquest

https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#simple_requests

https://medium.com/@f2004392/cors-preflight-request-options-9d05b9248e5a

As per the W3C specification(For HTTP request methods in particular, other than GET or POST with certain content types), browsers first makes the preflight (OPTIONS request ) in order to validate whether the supported methods are valid from the server. 

### Browser's Process&Threads

https://thiluxan.medium.com/how-web-browsers-use-process-threads-a5e560d42037

Like Chrome, Firefox also using the concepts of multi-threading inside each process. With the release of Firefox 54, Mozilla has completed its transition to a multi-threaded web browser. But the multi-threading concept in Firefox is bit different with that of Chrome. In Chrome it initialize separate process for each tabs. If 5 tabs are opened, then there will be 5 render processes running. It will result it consuming memory, when the no. of processes get increased.

For this problem, Firefox implemented a conservative approach. There will be 4 new processes created for 4 new processes. If an additional tab is opened, it will run using threads within the existing processes. Multiple tabs within a process share the browser engine that already exists in memory, instead of each creating their own. This will reduce the consumption of memory, as more memory needed if no. of processes increased.

### Redux Introduction

https://medium.com/leanjs/introduction-to-redux-redux-explained-with-very-simple-examples-b39d7967ceb8

The three principles

1. The state of the app is stored in one JavaScript object.
2. The state is read-only, but we can change the state by describing a change with another JavaScript object called action.
3. Changes are executed by pure functions called reducers. A reducer accepts the current state and an action and returns a new state or the same state.

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

(end)
