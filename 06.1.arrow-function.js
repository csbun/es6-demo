let arr = [1, 2, 3];

var oldTypeSqu = arr.map(function (a) {
    return a * a;
});
console.log('old: ' + oldTypeSqu.join(', '));
// old: 1, 4, 9

/**
 * singleArg => expr
 */ 
let newTypeSqu = arr.map(a => a * a);
console.log('singleArg => expr')
console.log(newTypeSqu);
// [1, 4, 9]

/**
 * singleArg => { stmt1; stmt2; ... }
 */
let newTypeSqu2 = arr.map(a => {
    let b = a * a;
    return b;
});
console.log('singleArg => { stmt1; stmt2; ... }')
console.log(newTypeSqu2);
// [1, 4, 9]

/**
 * (arg1, arg2, ...) => expr
 */
let sumup1 = arr.reduce((x, y) => x + y);
console.log('(arg1, arg2, ...) => expr');
console.log('sumup1: ' + sumup1);
// sumup: 6

/**
 * (arg1, arg2, ...) => { stmt1; stmt2; ... }
 */
let sumup2 = arr.reduce((x, y) => {
    let z = x + y;
    return z;
});
console.log('(arg1, arg2, ...) => { stmt1; stmt2; ... }');
console.log('sumup2: ' + sumup2);
