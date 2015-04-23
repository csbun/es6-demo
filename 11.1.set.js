/**
 * Set
 * A collection of values without duplicates
 */

let set = new Set();
set.add('hello');

console.log(set.has('hello'));
// true
console.log(set.has('hi'));
// false

set.add('world');
console.log('>> start for of')
for (let elem of set) {
    console.log(elem);
}
// >> start for of
// hello
// world


/**
 * without duplicates
 * *** TODO: NOT WORK VIA BABEL ***
 */
// let unique = [...new Set([1, 2, 3, 4, 3, 2])];
// console.log(unique); // [1, 2, 3, 4]


