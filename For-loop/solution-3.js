// Create a function to loop over all elements of the array and add them to a string.

// Create an array 'numbers' that has values [‘one’,‘two’,‘three’,‘four’,‘five’]
// Create a variable 'sum' has value  '' (empty string);
// Create a function sumArray(), takes in 1 input 'arr', and outputs 'sum'
// sumArray() has a for loop.
// Create initialization: let i = 0
// Create condition: i < arr.length
// Create final-expression: i++
// Create statement.
// Call function sumArray(numbers)
// Log sum to the console. (expected result: one two three four five)

const numbers = ["one", "two", "three", "four", "five"];

let sum = "";
function sumArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] + " ";
    }
    return sum;
}

console.log(sumArray(numbers));
