// Q1. Show rating
// Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.
// showRating(4) ->
// showRating(2.5) ->
// showRating(0.5) ->

/* 
TIPS:
initialize an empty string
loop through the rounded down rating 
 - add a star for every iteration 
 - if its not the last iteration add a space
if the number is not an integer (google for how to know)
 - add a full stop
 return it 
 */

// **SOLUTION 1:
function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratings += "*";
    if (i !== Math.floor(rating) -1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}
console.log(showRating(2.5));


// Q2. Sort by lowest to highest price
// Given an array of numbers, return the prices sorted by low to high.

// sortLowToHigh([20, 40, 10, 30, 50, 10]) -> [10, 10, 20, 30, 40, 50]
// sortLowToHigh([5, 10, 0, -5]) -> [-5, 0, 5, 10]
// sortLowToHigh([3, 2, 1, 0]) -> [0, 1, 2, 3]
function sortLowToHigh(numbers) {
    return numbers.sort((a, b) => a - b);
}
console.log (sortLowToHigh([5, 10, 0, -5]));


// Q3. Sort by highest to lowest price
// Given an array of objects, return the prices sorted by high to low.

// sortHighToLow([
// { id: 1, price: 50 }
// { id: 2, price: 30 }
// { id: 3, price: 60 }
// { id: 4, price: 10 }
// ])
// -> [{ id: 1, price: 50 }
// // { id: 2, price: 30 }
// // { id: 3, price: 60 }
// // { id: 4, price: 10 }]
function sortHighToLow(numbers) {
    return numbers.sort((a, b) => b.price - a.price);
}
console.log(sortHighToLow([
     { id: 1, price: 50 },
     { id: 2, price: 30 },
     { id: 3, price: 60 },
     { id: 4, price: 10 }
])
);


// Q4. Promises 20:00 min
// On YouTube, watch:
// "The Async Await Episode I Promised"
// - Fireship

// 'Async Await JavaScript ES7'
// - Techsith (1.5x speed)

// "Async JS Crash Course - Callbacks, Promises, Async Await"
// - Travsery Media (1.5x speed)
