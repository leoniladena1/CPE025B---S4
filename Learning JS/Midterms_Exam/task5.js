function sumDeepStrictNumbers(arr) {
    let sum = 0;
    for (let i; i <= arr.length ; i++){
        if (Array.isArray(arr[i])){
            sum += sumDeepStricNumbers(arr[i]);
        } else if (typeof arr[i] === "number" && !isNaN(arr[i])){
            sum+= sum;
        }
    }
    return sum;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));
