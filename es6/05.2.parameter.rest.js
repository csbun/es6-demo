function fn(a, b, ...others) {
    console.log(others);
}

fn('a', 'b', 'c', 'd', 'e');
// [ 'c', 'd', 'e' ]
fn();
// []