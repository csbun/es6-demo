/**
 * generator implementing iterator
 * see: 15.1.iterable.js
 *
 * *** TODO: NOT WORK VIA BABEL ***
 */
function iterateOver (...values) {
    // 返回一个 iterable 对象
    return iterable = {
        // iterable 对象 要有一个 Symbol.iterator 方法
        * [Symbol.iterator]() {
            for (el of values) {
                yield el;
            }
        }
    }
}


let iterableObj = iterateOver('China', 'Guangdong', 'Guangzhou');

// 用 for of 遍历
// 见 15.2.iterable.for-of.js
for (let file of iterableObj) {
    console.log(file);
}
// China
// Guangdong
// Guangzhou