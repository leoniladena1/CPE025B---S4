const memo = {};

function power(base, exp) {  
    const key = `${base}^${exp}`;
    if (key in memo) return memo[key];
    if (exp == 0){        
        return 1;
    } else if (exp < 0) {
        const result = (1 / power(base, -exp));
        memo[key] = result;
        return result;
    }  else {
        return base * power(base, exp - 1); 
        }

}
// Test Code
console.log(power(2, 5));
console.log(power(2, -2));
