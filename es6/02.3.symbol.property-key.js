'use strict';

/**
 * 定义变量属性值，避免冲突
 */

var PROP = Symbol();

var obj = {};

obj[PROP] = function (arg) {
    console.log('Hello', arg);
};

obj[PROP]('Hans');

/**
 * Symbols are not visible in for...in iterations.
 */
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';

for (var i in obj) {
   console.log(i); // logs "c" and "d"
}

/**
 * In addition, Object.getOwnPropertyNames() will not return symbol object properties,
 * however, you can use Object.getOwnPropertySymbols() to get these.
 */
console.log(Object.getOwnPropertyNames(obj));
// [ 'c', 'd' ]
console.log(Object.getOwnPropertySymbols(obj));
// [ Symbol(), Symbol(b) ]

/**
 * Symbol-keyed properties will be completely ignored when using JSON.stringify():
 */
console.log(JSON.stringify(obj));
// {"c": "c", "d": "d"}
