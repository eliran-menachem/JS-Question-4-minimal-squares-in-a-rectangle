# JS-Question-4-minimal-squares-in-a-rectangle

Given a rectangle of dimensions a and b, we want to divide it into the minimal number of covering squares.
the following rectangle has a dimensions of 5 * 3.
it can be cut into 4 squares: [3*3,2*2,1*1,1*1]
implement a function that will take two numbers repreenting the sides of the rectangle and will return an array containing the dimension of each resulting square.

var sqrs = squareInRect(5,3);
console.log(sqrs); // [3,2,1,1]

var sqrs = squareInRect(3,5);
console.log(sqrs); // [3,2,1,1]

var sqrs = squareInRect(5,5);
console.log(sqrs); // [5]
