var XRegExp = require('xregexp')

let str = '/2012/10/page.html';

/** 
 * TODO: XRegExp.rx NOT WORKS
 */
// let parts = str.match(XRegExp.rx`
//     ^                   # match at start of string only
//     / (?<year> [^/]+ )  # capture top dir as year
//     / (?<month> [^/]+ ) # capture subdir as year
//     / (?<title> [^/]+ ) # file name base
//     \.html?             # file name extension: .htm or .html
//     $                   # end of string
// `);

// console.log(parts.year);