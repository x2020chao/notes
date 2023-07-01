const handler = {
  get() {
    console.log("get", ...arguments);
    return Reflect.get(...arguments);
  },
  set() {
    console.log("set", ...arguments);
    return Reflect.set(...arguments);
  },
  has() {
    console.log("has", ...arguments);
    return Reflect.has(...arguments);
  },
  defineProperty() {
    console.log("defineProperty", ...arguments);
    return Reflect.defineProperty(...arguments);
  },
  getOwnPropertyDescriptor() {
    console.log("getOwnPropertyDescriptor", ...arguments);
    return Reflect.getOwnPropertyDescriptor(...arguments);
  },
  deleteProperty() {
    console.log("deleteProperty", ...arguments);
    return Reflect.deleteProperty(...arguments);
  },
  ownKeys() {
    console.log("ownKeys", ...arguments);
    return Reflect.ownKeys(...arguments);
  },
  getPrototypeOf() {
    console.log("getPrototypeOf", ...arguments);
    return Reflect.getPrototypeOf(...arguments);
  },
  setPrototypeOf() {
    console.log("setPrototypeOf", ...arguments);
    return Reflect.setPrototypeOf(...arguments);
  },
  isExtensible() {
    console.log("isExtensible", ...arguments);
    return Reflect.isExtensible(...arguments);
  },
  preventExtensions() {
    console.log("preventExtensions", ...arguments);
    return Reflect.preventExtensions(...arguments);
  },
  apply() {
    console.log("apply", ...arguments);
    return Reflect.apply(...arguments);
  },
  construct() {
    console.log("construct", ...arguments);
    return Reflect.construct(...arguments);
  },
};

const arr = new Proxy([], handler);
arr.push(1)
arr[0] = 2

const ob = new Proxy({}, handler)
ob.id = 1;
ob.id = 2;
