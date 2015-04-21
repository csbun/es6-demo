let propKey = 'myProp';
let methodKey = 'myMethod';

let obj = {
    [propKey + '1']: 123,
    [methodKey]() {
        return 'Hi!';
    },
    // key is a symbol
    [Symbol.iterator]() {
        return 'Hi, Symbol Key!';
    }
};

console.log(obj.myMethod() + ' ' + obj.myProp1);

console.log(obj[Symbol.iterator]());