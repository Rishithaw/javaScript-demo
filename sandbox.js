// Callbacks & foreach

const myFunc = (callbackFunc) => {
  const value = 50;
  callbackFunc(value);
};

myFunc(value => {
  console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);