// template strings
const title = 'Best reads of 2026';
const author = 'John Doe';
const likes = 50;
// concatination way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

//Template string way (AKA Template literals)
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);
//creating html templates
let html = `
  <h2>${title}</h2>
  <p>by ${author}</p>
  <span>This blog has ${likes} likes</span>
`;
console.log(html);