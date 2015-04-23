'use strict';
function order(x, y) {
    if (x > y) {
        let _tmp = x;
        x = y;
        y = _tmp;
    }
    console.log(_tmp);
    // error
    return [x, y];
}
console.log(order(1, 2));
