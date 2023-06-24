const targetObj = {
  id: 'target'
}

const proxyObj = new Proxy(targetObj, {})
log(targetObj.id, proxyObj.id) // target target true

targetObj.name = 'target';
log(targetObj.name, proxyObj.name); // target target true

proxyObj.xx = 'proxy';
log(targetObj.xx, proxyObj.xx); // proxy proxy true

/**
 * // true
 */
console.log(targetObj.hasOwnProperty('id'));
console.log(proxyObj.hasOwnProperty('id'));
console.log(targetObj.hasOwnProperty('name'));
console.log(proxyObj.hasOwnProperty('name'));
console.log(targetObj.hasOwnProperty('xx'));
console.log(proxyObj.hasOwnProperty('xx'));

function log(ori, res) {
  console.log(ori, res, ori === res);
}