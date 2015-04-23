/**
 * Map
 * Dictionary from arbitrary key to arbitrary value
 */

let map = new Map();
let obj = {};

// map.set(key, val);
map.set(obj, 123);

console.log(map.get(obj));
// 123

console.log(map.has(obj));
// true

console.log('>> start for of');
for (let [key, value] of map) {
    console.log(key, value);
}
console.log('<< end for');
// >> start for of
// {} 123
// << end for

map.delete(obj);
console.log(map.has(obj));
// false