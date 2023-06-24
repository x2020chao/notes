const target = {
  id: 'target'
}

const handler = {
  get() {
    return 'handler';
  }
}

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(target.id) // target
console.log(proxy.id) // handler

revoke(); // 撤销代理

console.log(proxy.id); // TypeError: Cannot perform 'get' on a proxy that has been revoked