var arr = [2015, 3, 21];

/**
 * replace Function.prototype.apply
 */
var max = Math.max(...arr);
// Math.max.apply(null, arr);
console.log('max: ' + max);
// 2015

let arr2 = ['a', 'b'];
arr2.push(...arr);
// arr2.push(2015, 3, 21);
console.log('arr2: ' + arr2.join(','));
// a,b,2015,3,21

/**
 * works in constructors
 */
let date = new Date(...arr);
console.log('date: ' + date);
// Apr 21 2015