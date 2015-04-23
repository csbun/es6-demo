/**
 * Object.assign(target, source_1, source_2, ...)
 * Merge source_1 into target
 * Merge source_2 into target
 * ...
 * return target
 */
'use strict';

let obj = {
    foo: 123
};

let src = {
    bar: 456
};

/*
// *** TODO: NOT WORK VIA BABEL ***

let res = Object.assign(obj, src);

console.log('res:');
console.log(res);


console.log('obj:');
console.log(obj);


console.log('src:');
console.log(src);

//*/