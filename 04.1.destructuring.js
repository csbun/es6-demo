var hans = {
    first: 'Hans',
    last: 'Chan'
};

let { first: f, last: l } = hans;
// f = hans.first, l = hans.last

console.log(f + ' ' + l);