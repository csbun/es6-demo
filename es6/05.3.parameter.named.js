function fn(arg0, { opt1, opt2 }) {
    console.log(opt1, opt2);
}

fn(0, {
    opt1: 'a',
    opt2: 'b'
});
// a b