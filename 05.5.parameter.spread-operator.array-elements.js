'use strict';

let x = [1, 2];
let y = [3];
let z = [4, 5, 6];

/**
 * Concatenate arrays
 * @type {Array}
 */
let axyz = ['a', ...x, ...y, 'b', ...z];
console.log(axyz);
// [ 'a', 1, 2, 3, 'b', 4, 5, 6 ]

/**
 * Convert iterable objects to arrays
 * *** TODO: NOT WORK VIA BABEL ***
 * *** see 11.1.set.js ***
 */
// let set = new Set(z);
// let arr = [...set];
// console.log(arr);
