# `Proxy`
> Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

## 语法
```js
const proxy = new Proxy(target, handler);
```
- target 目标对象
- handler 处理程序对象

> [给目标属性或代理属性赋值会反映在两个对象上](./code/blank-proxy.js)  

> `Proxy.prototype` 是 `undefined`, 不能使用 `instanceof` 操作符

## 捕获器
1. [`get`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get)
   > 获取属性值  

2. [`set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
   > 设置属性值

3. [`has`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has)
   > `in` 操作符

4. [`defineProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)
   > `Object.defineProperty()`

5. [`getOwnPropertyDescriptor`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor)
   > `Object.getOwnPropertyDescriptor()`

6. [`deleteProperty`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)
   > `delete` 操作符

7. [`ownKeys`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
   > `Object.keys()`, `Object.getOwnPropertyNames()`, `Object.getOwnPropertySymbols()`

8. [`getPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf)
   > `Object.getPrototypeOf()`

9. [`setPrototypeOf`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)
   > `Object.setPrototypeOf()`

10. [`isExtensible`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible)
   > `Object.isExtensible()`

11. [`preventExtensions`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions)
   > `Object.preventExtensions()`

12. [`apply`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply)
   > 调用函数

13. [`construct`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)
   > `new` 操作符  

### 捕获器不变式
> 如果目标对象有一个不可配置不可写的属性，当捕获器返回一个不同的值时，抛出 `TypeError`
### 可撤销代理
> [`revocable` 撤销代理对象与目标的关联，不可逆，撤销后再调用代理返回 `TypeError`](./code/revoke-proxy.js)
