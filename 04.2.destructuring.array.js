const [X, Y] = ['X-VAL', 'Y-VAL'];
// const X = 'X-VAL', Y = 'Y-VAL';
console.log(X, Y);


var [a, b, ...rest] = ['a', 'b', 'c', 'd'];
// var a = 'a', b = 'b', rest = ['c', 'd'];
console.log(a, b, rest);

// seap values
[a, b] = [b, a];
console.log(a, b);


let [all, year, month, day] = /^(\d+)-(\d+)-(\d+)$/.exec('2015-04-20');
console.log(all, year, month, day);