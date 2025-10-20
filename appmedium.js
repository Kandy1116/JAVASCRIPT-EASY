// Q1. Falsy or Truthy?

// Given two values. 
// return the first one if it's falsy, 
// otherwise return the second one. 
// arrLength(0, 500) -> 0
// arrLength(false, 100) -> false
// arrLength([true, 'Dog']) -> 'Dog' 

// Talk it out:
// function falsyOrTruthy(elem1, elem2) {
//     if (/*falsy*/) {
//         // return the element
//     }
//     else {
//         // return element 2
//     }
// }
// Put in arrLength format:
// function falsyOrTruthy(elem1, elem2) {
//     return !elem1 ? elem1 : elem2;
//     if (!elem1) {
//         // return the element
//         return elem1;
//     }
//     else {
//         return elem2
//     }
// }
// Shorten to one line:
function falsyOrTruthy(elem1, elem2) {
    return !elem1 ? elem1 : elem2;
}
console.log(falsyOrTruthy(true, 'Dog'));


// Q2. Return the length of any given array

// Give an arry, return it's length
// arrLength([1, 2, 3,]) -> 3 *b/c 3 elements
// arrLength([5, 0, -4, 1]) -> 4 *b/c 4 elements
// arrLength([]) -> 0 *b/c it's empty

function arrLength(arr) {
    return arr.length;
}
console.log(arrLength([5, 0, -4, 1]));


// Q3. Get the last element in an array
// ***remember the FIRSST elem in an array is 0, the SECOND is 1

// Give an arry, return the first element
// lasElem([3, 2, 0, 6, 2]) -> 2
// lasElem(['dog'. 'cat', 'ball' ]) -> ball
// lasElem([null, 5, false]) -> false

function arrLength(arr) {
    return arr[arr.length -1]; /*find the length of the array and -1 */
}
console.log(arrLength([3, 2, 0, 6, 2]));


// Q4. Find the sum of an array
// ***remember the FIRST elem in an array is 0, the SECOND is 1

// Give an arry, return the sum of every element
// arrSum([2, 2, 2]) -> 6
// arrSum(100, 200, 500]) -> 800
// arrSum([0, -5, -10]) -> -15
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum = sum + arr[i];
    }
    return sum
}
console.log(arrSum([100, 200, 500]))

/*This is how you loop through every element in an array*/
// for loop: (arr[i])
// function arrSum(arr) {
//     for (let i = 0; i < arr.length; ++i) { 
//         console.log('run this code')
//     }
// }
// console.log('for loop broke') /* same as console.log(arrSum([1, 2, 3, 4 ,5, 6])); */

// Lengthen:
// function arrSum(arr) {
//     for (let i = 0; i < arr.length; ++i) { 
//         console.log(arr[i]);
// }
// console.log('for loop broke')
// }
// console.log(arrSum([1, 2, 3, 4 ,5, 6]));


// Q5. Add up the numbes from a single number
// Given a number, add up all the numbers from one to the number that is given
// E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10 

// progressiveSum(3) -> 6
// progressiveSum(4)) -> 10
// progressiveSum(600) -> 180300
function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; ++i) {
        sum = sum + i;
    }
    return sum
}

console.log(progressiveSum(3))


// Q6. Calculate the time
// Given a number in seconds, return this number in mm:ss format.

// calcTime(66) -> '01:06'
// calcTime(50) -> '00:50'
// calcTime(300) -> '05:00'
function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }

    return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(66))