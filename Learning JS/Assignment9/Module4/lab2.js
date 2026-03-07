// Decorator function
let myDecorator = function(fn) {
    const cache = new Set(); // store stringified arguments

    return function(...args) {
        const key = JSON.stringify(args); // convert args to string

        if (cache.has(key)) {
            console.log(`arguments already used: ${args}`);
        } else {
            cache.add(key);
            fn(...args);
        }
    }
}

// Example usage
let sum = function(...args) {
    let retVal = 0;
    for (let arg of args) {
        retVal += arg;
    }
    console.log(`sum: ${retVal}`);
    return retVal;
}

let dfn = myDecorator(sum);

dfn(2, 3, 4);  // sum: 9
dfn(4, 5);     // sum: 9
dfn(2, 3, 4);  // arguments already used: 2,3,4
dfn(4, 5);     // arguments already used: 4,5