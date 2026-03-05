// deep comparison function
let deepComp = function(src, trg) {
    let retVal = Object.keys(src).length === Object.keys(trg).length;

    if (retVal) {
        for (let property in src) {

            if (typeof src[property] === typeof trg[property]) {

                if (typeof src[property] === 'object' && src[property] !== null && trg[property] !== null) {
                    retVal = deepComp(src[property], trg[property]);
                } else {
                    retVal = src[property] === trg[property];
                }

            } else {
                retVal = false;
            }

            if (!retVal) break;
        }
    }

    return retVal;
};


// TESTING

let obj1 = {
    name: "Leonil",
    age: 20,
    address: {
        city: "Quezon City",
        zip: 1101
    },
    scores: [90, 85, 88]
};

let obj2 = {
    name: "Leonil",
    age: 20,
    address: {
        city: "Quezon City",
        zip: 1101
    },
    scores: [90, 85, 88]
};

let obj3 = {
    name: "Leonil",
    age: 21,
    address: {
        city: "Quezon City",
        zip: 1101
    },
    scores: [90, 85, 88]
};

console.log("obj1 vs obj2:", deepComp(obj1, obj2)); // true
console.log("obj1 vs obj3:", deepComp(obj1, obj3)); // false