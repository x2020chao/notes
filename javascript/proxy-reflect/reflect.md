# `Reflect`
> 提供拦截 JavaScript 操作的方法
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

## `反射API` 与 `对象API`
1. `反射API` 不限于捕获处理程序
2. 大多数 `反射API` 在 `Object` 上有对应的方法，通常来说，`Object` 上的方法适用于通用程序，反射方法适用于细粒度的对象控制与操作

## 状态标记
以下反射方法都会提供状态标记（返回布尔值）
1. defineProperty
2. preventExtensions
3. set
4. setPrototypeOf
5. deleteProperty

## 用一等函数替换操作符
- Reflect.get()
  > 可以替代对象属性访问操作符
- Reflect.set()
  > 可以替代 `=` 赋值操作符
- Reflect.has()
  > 可以替代 `in` 操作符或 `with()`。
- Reflect.deleteProperty()
  > 可以替代 `delete` 操作符。
- Reflect.construct()
  > 可以替代 `new` 操作符。

## 安全应用函数
在通过 `apply` 方法调用函数时，被调用的函数可能也定义了自己的 `apply` 属性。为绕过这个问题，可以使用定义在 `Function` 原型上的 `apply` 方法
```js
Function.prototype.apply.call(myFun, thisVal, argumentsList);
```
这种代码可以使用 `Reflect.apply` 来避免
```js
Reflect.apply(myFun, thisVal, argumentsList)
```