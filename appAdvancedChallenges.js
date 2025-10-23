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
    if (i !== Math.floor(rating) - 1) {
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
console.log(sortLowToHigh([5, 10, 0, -5]));

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
console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
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


// Q5. Find all the posts by a single user
// Call this API "https://jsonplaceholder.typicode.com/posts"
// return all the posts by any give user id
//  posts by user (4) -> (10) [{…}, {…}, {…}, {…}]
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {userId: 4, id: 31, title: 'ullam ut quidem id aut vel consequuntur', body: 'debitis eius sed quibusdam non quis consectetur vi…sci atque\nquaerat voluptatem adipisci repudiandae'}
// 1: {userId: 4, id: 32, title: 'doloremque illum aliquid sunt', body: 'deserunt eos nobis asperiores et hic\nest debitis r…ptates et aut adipisci ea maiores voluptas maxime'}
// 2: {userId: 4, id: 33, title: 'qui explicabo molestiae dolorem', body: 'rerum ut et numquam laborum odit est sit\nid qui si…t quaerat qui in\nrerum officiis sequi cumque quod'}
// 3: {userId: 4, id: 34, title: 'magnam ut rerum iure', body: 'ea velit perferendis earum ut voluptatem voluptate…enda accusamus dignissimos officia nesciunt nobis'}
// 4: {userId: 4, id: 35, title: 'id nihil consequatur molestias animi provident', body: 'nisi error delectus possimus ut eligendi vitae\npla…s quo illum voluptas eligendi\net nobis quia fugit'}
// 5: {userId: 4, id: 36, title: 'fuga nam accusamus voluptas reiciendis itaque', body: 'ad mollitia et omnis minus architecto odit\nvolupta…ti\nqui aspernatur quia eaque ut aperiam inventore'}
// 6: {userId: 4, id: 37, title: 'provident vel ut sit ratione est', body: 'debitis et eaque non officia sed nesciunt pariatur…s omnis consequatur aut enim officiis in quam qui'}
// 7: {userId: 4, id: 38, title: 'explicabo et eos deleniti nostrum ab id repellendus', body: 'animi esse sit aut sit nesciunt assumenda eum volu…t aut id quia\nratione optio eos iusto veniam iure'}
// 8: {userId: 4, id: 39, title: 'eos dolorem iste accusantium est eaque quam', body: 'corporis rerum ducimus vel eum accusantium\nmaxime … sapiente vel dolore minus voluptatem incidunt ex'}
// 9: {userId: 4, id: 40, title: 'enim quo cumque', body: 'ut voluptatum aliquid illo tenetur nemo sequi quo …e omnis voluptatem iure quasi maxime voluptas nam'}
// length: 10
// [[Prototype]]: Array(0)
async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

  const result = await promise.json();

  const posts = result.filter((element) => element.userId === userId);

  console.log(posts);
}

postsByUser(4);


// Q5. First 6 incomplete ToDos
// Call this API "https://jsonplaceholder.typicode.com/todos"
// return the first 6 incomplete todos from the result
//  firstSixIncomplete() ->
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// 0: 
// completed: false
// id: 1
// title: "delectus aut autem"
// userId: 1
// [[Prototype]]: Object
// 1: 
// completed: false
// id: 2
// title: 
// "quis ut nam facilis et officia qui"
// userId: 1
// [[Prototype]]: Object
// 2: {userId: 1, id: 3, title: 'fugiat veniam minus', completed: false}
// 3: {userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false}
// 4: {userId: 1, id: 6, title: 'qui ullam ratione quibusdam voluptatem quia omnis', completed: false}
// 5: {userId: 1, id: 7, title: 'illo expedita consequatur quia in', completed: false}
// length: 6
// [[Prototype]]: Array(0)
async function firstSixIncomplete(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result = await promise.json();

  const incompleteTasks = result.filter(elem => !elem.completed).slice(0,  6);

  console.log(incompleteTasks);
}

firstSixIncomplete(6);
