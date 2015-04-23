/**
 * 将数多个对象组合成一个 iterable 对象
 */
function iterateOver (...values) {
    let index = 0;
    // 定义 iterable 对象
    let iterable = {
        // iterable 对象 要有一个 Symbol.iterator 方法
        [Symbol.iterator]() {
            // 定义一个 iterator 对象
            let iterator = {
                // iterator 对象 有一个 next 方法
                next() {
                    if (index < values.length) {
                        return {
                            value: values[index++]
                        };
                    } else {
                        // 遍历完毕 done = true
                        return {
                            done: true
                        }
                    }
                } // end of next()
            }
            // Symbol.iterator 方法 返回一个 iterator 对象
            return iterator;
        } // end of [Symbol.iterator]()
    }
    // 返回这个 iterable 对象
    return iterable;
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