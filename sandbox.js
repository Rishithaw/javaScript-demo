// Primitive values

// let score1 = 50;
// let score2 = score1;
// console.log(`Score1: ${score1}`, `Score2: ${score2}`);

// score1 = 100;
// console.log(`Score1: ${score1}`, `Score2: ${score2}`);

// Refernce values

const user1 = {name: 'ryu', age:30};
const user2 = user1;

console.log(user1, user2);

user1.name = 'chun-li';
console.log(user1, user2);
