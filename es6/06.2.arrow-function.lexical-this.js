function OldCmp(el) {
    // define `that = this`
    var that = this;
    el.addEventListener('click', function () {
        // use `that`
        that.handleClick();
    });
}
OldCmp.prototype.handleClick = function() {
    // body...
};

/**
 * no more `that = this`
 */
function NewCmp(el) {
    el.addEventListener('click', () => {
        // use `this`
        this.handleClick();
    });
}
NewCmp.prototype.handleClick = function() {
    // body...
};