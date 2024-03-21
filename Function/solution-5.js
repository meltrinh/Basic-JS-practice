// Requirements:
// Create a function named plusA() and a variable 'a'

// 1)'a' is a constant and can’t be changed.
// 2)plusA takes 1 input 'num'
// 3)plusA returns an output that equals num + a
// 4)plusA is called and passed in a value of your choice.
// 5)plusA’s output is assigned to the variable 'answer'
// 6)'answer' is a constant and can’t be changed.
// 7)'answer' is logged to the console.

const a = 5
function plusA(num) {
    return num + a;
}

const answer = plusA(10);
console.log(answer);