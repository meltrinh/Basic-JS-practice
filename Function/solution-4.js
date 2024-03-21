// Create a function named calculator(), 2 global variables 'a' and 'answer'.

// 'a' is a constant and can’t be changed. 'a' is assigned a value: 10.
// calculator() takes an input 'num'
// calculator() has a local variable 'b', 'b' has value of : 5
// calculator() returns a result of a + b + num
// 'answer' is assigned the output of calculator()
// 'answer' is logged to the console.


const a = 10;
let b = 5;
function calculator(num) {
    return a + b + num;
}

let answer = calculator(20);
console.log(answer);