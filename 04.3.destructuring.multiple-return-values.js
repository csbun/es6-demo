function findElement (arr, predicate) {
    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (predicate(element)) {
            return { element, index };
            // same as { element: element, index: index }
        }
    }
    return {
        element: undefined,
        index: -1
    };
}

let arr = [7, 8, 9, 10];

/*
let { element, index } = findElement(arr, x => x % 2 === 0);
// element = 8; index = 1;
console.log("element: %s, index: %s", element, index);
//*/

/* order doesn't metter
let { index, element } = findElement(arr, x => x % 2 === 0);
console.log("element: %s, index: %s", element, index);
//*/

//*
let { element } = findElement(arr, x => x % 2 === 0);
let { index } = findElement(arr, x => x % 2 === 0);
console.log("element: %s, index: %s", element, index);
//*/