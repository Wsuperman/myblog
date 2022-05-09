export default function (timestamp, showTime = false) {
    const date = new Date(+timestamp);
    // 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。不足两位，头部补上0
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    let str = `${date.getFullYear()}-${month}-${day}`;
    if (showTime) {
        const hour = date.getHours().toString().padStart(2, "0");
        const minute = date.getMinutes().toString().padStart(2, "0");
        const second = date.getSeconds().toString().padStart(2, "0");
        str += ` ${hour}:${minute}:${second}`;
    }
    return str;
}