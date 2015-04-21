let x = 1;
let y = 'str';

let templateHandler = function (arr, x, y) {
    console.log(arr);
    console.log('x:' + typeof x + ':' + x);
    console.log('y:' + typeof y + ':' + y);
}
templateHandler`Hello ${x} ${y} !`;
// [ 'Hello ', ' ', ' !' ]
// x:number:1
// y:string:str