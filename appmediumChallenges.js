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

console.log(calcTime(50))


// Q7. Find the largest number
// Given an array of numbers, return the largest number of that array

// getMax([5, 100, 0]) -> 100
// getMax([12, 10, -20]) -> 12
// getMax([-300, -100, -200]) -> -100

/*Loop Test* Check console for every element of the array ex: -300, -100, -200*/
// function getMax(arr) {
//     for (let i = 0; i < arr.length; ++i)
//         console.log(arr[i]);
// }
// console.log(getMax([-300, -100, -200]))
function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; ++i)
        if (arr[i] > max) {
            max = arr[i];
        }
        return max;
    }
    console.log(getMax([-300, -100, -200]))


// Q8. Revers a string
// Given a string, return the reversed string
/***- Use an incrementing for loop */
/***- Use a decrementing for loop */
/***- Use the array reverse property */

// reverseString('abc') -> 'cba'
// reverseString('David') -> 'divaD'
// reverseString('This is cool') -> 'looc si sihT'

function reverseString(str) {
    let reversedString = '';
    for (let i = 0; i < str.length; ++i) {
        reversedString = str[i] + reversedString;
    }
    return reversedString
}
console.log(reverseString('abc'))


// Q9. Turn every element in an array into 0
// Given an array of elements, return the same length array filled with 0's.
/*** - Solution 1: For loop */
/*** - Solution 2: Array 'fill' */
/*** - Solution 3: Array 'map' */

// convertToZeros([5, 100, 0]) -> [0, 0, 0]
// convertToZeros([12]) -> [0]
// convertToZeros([1, 2, 3, 4, 5]) -> [0, 0, 0, 0, 0]

function convertToZeros(arr) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = 0
    }
    return arr;
}

console.log(convertToZeros([1, 2, 3, 4, 5, 6]))


// Q10. Filter out all the apples
// Given an array of fruitd, if it is an apple, remove it from the array.
/*** - Solution 1: For loop */
/*** - Solution 2: Array 'filter' */

// removeApples(['Banana', 'Apple', 'Orange', 'Apple']) -> ['Banana', 'Orange']
// removeApples(['Tomato', 'Orange', 'Banana']) -> ['Tomato', 'Orange', 'Banana']
// removeApples(['Banana', 'Orange', 'Apple']) -> ['Banana', 'Orange']

// /* For loop .push
// function removeApples(arr) {
//     let noApples = []
//     for (let i =0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple') {   
//             noApples.push(arr[i]);
//         }
//     }
//     return noApples
//     }
// console.log(removeApples(['Banana', 'Orange', 'Apple']))

/*** - Solution 1: For loop */
// function removeApples(arr) {
//     for (let i =0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple')
//         console.log(arr[i])
//     }
//     }
// console.log(removeApples(['Banana', 'Orange', 'Apple']))

/*** - Solution 2: Array 'filter' */
function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple')
}
console.log(removeApples(['Banana', 'Orange', 'Apple']))


// Q11. Filter out all the falsy values
// Given an array of values, filter out al the falsy values and only return the truthy values.
/*** - Solution 1: For loop */
/*** - Solution 2: Array 'filter' */

// filterOutFalsy(["", [], 0, null, undefined, "0"]) -> [[], "0"]
// filterOutFalsy(['Tomato', 'Orange', 'Banana', false]) -> ['Tomato', 'Orange', 'Banana']
// filterOutFalsy(['Banana', 'Orange', 'Apple']) -> ['Banana', 'Orange']

/*** - Solution 1: For loop */
// function filterOutFalsy(arr) {
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//             truthyArr.push(arr[i])
//         }
//     }
//     return truthyArr
// }
// console.log(filterOutFalsy(['', NaN, '500', null, false, 0]))

function filterOutFalsy(arr) {
    return 
    }
console.log(filterOutFalsy(['Banana', 'Orange', 'Apple', NaN, 0]))


// Q12. Truthy to true, Falsy to false
// Given an array of truthy and falsy values, 
// return the same array of elements into its boolean value.

// convertToBoolean([500, 0, "David", "", []]) -> [true, false, true, false, true]

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
    }
console.log(convertToBoolean([500, 0, "David", "", []]))