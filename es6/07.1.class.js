class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}

var p = new Point(10, 20);
console.log('point: ' + p);
// point: (10,20)


/**
 * subclass
 */
class ColorPoint extends Point {
    constructor(x, y, color) {
        // super: Point.constructor
        super(x, y);
        this.color = color;
    }
    // rewrite toString
    toString() {
        return this.color + ' ' + super.toString();
    }
}
var cp = new ColorPoint(30, 40, 'red');
console.log('color point: ' + cp);
// color point: red (30,40)
