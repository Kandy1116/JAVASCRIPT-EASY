// Q1: Return the sum of two numbers
function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(3, 5))


// Q2: Convert hours into seconds
// hrs:2 -> 7200; 10 -> 36000; 24 -> 86400
function hoursIntoSeconds(hour) {
    let minutes = hour * 60;
    let seconds = minutes * 60;
    // shorter conversion: let seconds = hour * 60 * 60; (used only 1 line)
    return seconds
    // simplest conversion: return hour * 60 * 60; (no let; used only 1 line)
}
console.log(hoursIntoSeconds(24))


// Q3: Calculate the Perimeter of a rectangle
// calcPerimeter(6, 7) -> 26
// calcPerimeter(20, 10) -> 60
// calcPerimeter(2, 9) -> 22
function calcPerimeter(length, width) {
    return 2 * length + 2 * width;
    // or return (2 * length) + (2 * width);
}
console.log(calcPerimeter(20, 10))


// Q4. Calculate the area of a triangle
// Write a function that takes the base an height of a triangle
// and return its area
//calcTriangleArea(3, 2) -> 3 
//calcTriangleArea(10, 10) -> 50 
//calcTriangleArea(20, 20) -> 200 
// ***Take in 2 arguments, base  & height
// ***Formula to calculate area is 0.5 * base * height
// ***Return the answer and console.log it
function calcAreaOfTriangle(base, height) {
    // caclulate half * base * height
    return 0.5 * base * height;
    // alt: return (1/2) * base * height;
}
console.log(calcAreaOfTriangle(20, 20));


// Q5. Extend a String
// Write a function accepts a string and adds 'Frontend' onto the end of it.
//appendFrontend(Apple) -> "AppleFrontend" 
//appendFrontend(Banana) -> "BananaFrontend"
//appendFrontend(Orange) -> "OrangeFrontend"
// ***Accept a string
// ***Adding strings are similar to adding numbers
// ***Don't forget to return your result
function appendFrontend(string) {
    return string + 'Frontend'
}
console.log(appendFrontend('Apple'))

// Q6. Greater than 100?
// Given 2 numbers, return true if the sum of both numbers is greater than 100.
//sumGreaterThan100(20, 10) -> False
//sumGreaterThan100(50, 60) -> True
//sumGreaterThan100(100, -50) -> False
function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}
console.log(sumGreaterThan100(50, 60))


// Q7. Less than or Equal to Zero?
// Write a function that accepts a number
// return true if it is less than or equal to zero, otherwise return false.
// ***Tip: Use the less than or equal to operator
//lessThanOrEqualToZero(3) -> False
//lessThanOrEqualToZero(0) -> True
//lessThanOrEqualToZero(-2) -> True
function lessThanOrEqualToZero(num1) {
    return num1 <= 0
}
console.log(lessThanOrEqualToZero(-2))


// Q8. Opposite boolean
// Given a boolean (true or false, return the opposite boolean
// *** an exclamation mark in front of a boolean is going to return the opposite
//oppositeBooolean(true) -> false
//oppositeBooolean(false) -> true
function oppositeBooolean(bool) {
    return !bool
}
console.log(oppositeBooolean(true))


// Q9. Is not the number 0
// Given ANY element, return true if it is NOT the number 0.
//calcRemainder(5) -> true
//isNotZero(0) -> false
//isNotZero(null) -> true
function isNotZero(num) {
    return num !== 0
}
console.log(isNotZero(5))


// Q 10. Calculate the remainder
// Given 2 numbers, return their remainder when divided by each other.
//calcRemainder(4, 2) -> 0
//calcRemainder(7, 8) -> 7
function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(7, 8))


// Q 11. Is the number odd?
// Given 2 numbers, return tru if the number is odd
//isOdd(1) -> true
//isOdd(2) -> false
//isOdd(3) -> true
//*** use the remainder operator which is the % sign
// === returns a boolean
function isOdd(num) {
    return num % 2 !== 0
}
console.log(isOdd(2))


// Q 12. If a number is even, return 1 otherwise return -1
// Create a function that takes a number argument and returns 1 if the number is even.
// If the number is odd return -1.
//booleanInteger(1) -> -1
//booleanInteger(2) -> 1
//booleanInteger(5) -> -1
//*** use the ternary operator which is the colon sign (i.e., either it's true:false; show:don't show; 1:-1; yes:no; is:isn't etc.)
// ***if the value to the left is true, ?, it returns either/or
// ***literally checks if something is truthy (blatant answer) or falsey (negative answer like "null" "undefined" "0" "NaN" "") google for examples
// === returns a boolean
function booleanInteger(num) {
    // if (num % 2 === 0) {
    // return 1;
    // }
    // return -1;
    return num % 2 === 0 ? 1 : -1
}
console.log(booleanInteger(1))


// Q 13. Check if a user is logged in AND subscribed
// Create a function that takes in two strings.
// Return true if the first string is equal to "Logged_In' AND the second string is equal to 'Subscribed'
// Otherwise return false
//*** use and operator &&
//isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
//isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
//isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false
function isLoggedInAndSubscribed(loggedIn, subscribed) {
    // return 
    // if (loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED') {
    //     return true;
    // }
    // return false;
    return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED');
}
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))



// Q 14. Check if a user is logged in OR subscribed
// Create a function that takes in two strings.
// Return true if the first string is equal to "Logged_In' OR the second string is equal to 'Subscribed'
// Otherwise return false
//*** use and operator &&
//isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
//isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
//isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false
function isLoggedInAndSubscribed(loggedIn, subscribed) {
    // return 
    // if (loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED') {
    //     return true;
    // }
    // return false;
    return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED');
}
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))


