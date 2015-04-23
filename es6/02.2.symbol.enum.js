'use strict';

/**
 * 可以定义一些常量
 */

const COLOR_RED = Symbol();
const COLOR_BLUE = Symbol();

function checkColor (color) {
    switch (color) {
        case COLOR_RED:
            console.log('RED');
            break;
        case COLOR_BLUE:
            console.log('BLUE');
            break;
        default:
            console.log('UNKNOW');
    }
}

checkColor(COLOR_BLUE);