function fn(x, y = 'default') {
    console.log(x, y);
}

fn(1, 2);
// 1 2
fn();
// undefined 'default'