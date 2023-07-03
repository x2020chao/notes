const str = '测'

// java.util.Base64
const encodeInfo = btoa(unescape(encodeURIComponent(str)));
console.log(encodeInfo);

const decodeInfo = decodeURIComponent(escape(atob(encodeInfo)))
console.log(decodeInfo)

// unescape 已废弃 其中的十六进制转义序列将被其表示的字符替换
// escape 已废弃 生成新的由十六进制转义序列替换的字符串