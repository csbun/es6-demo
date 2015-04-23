/**
 * loop: Array
 */
var arr = ['a', 'b', 'c'];
for (let el of arr) {
    console.log(el);
}
// a
// b
// c

for (let [idx, el] of arr.entries()) {
    console.log(idx, el);
}
// 0 'a'
// 1 'b'
// 2 'c'


/**
 * loop: Set
 */
var set = new Set(arr);
for (let el of set) {
    console.log(el);
}
// a
// b
// c
