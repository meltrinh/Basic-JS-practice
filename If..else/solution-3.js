// Create a function testHeight() that helps recognize if the input is smaller, bigger, or equal to 'height'.

// Create a function testHeight() takes 1 input 'num'
// Inside testHeight(), declare a variable 'height' with value 100.
// Inside testHeight(), write an if statement.
// Write first condition (num > height)
// Write second condition (num === height)
// Write first action to log 'num is larger' in the console.
// Write the second action to log 'num is equal' in the console.
// Write the third action to log 'num is smaller' in the console.
// Call `testHeight()` with an argument of your choice.

function testHeight(num) {
  let height = 100;
  if (num > height) {
    console.log("num is larger");
  } else if (num === height) {
    console.log("num is equal.");
  } else {
    console.log("numer is smaller.");
  }
}

testHeight(120);
