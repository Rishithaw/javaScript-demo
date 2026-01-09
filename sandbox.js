// variables & block scope
const age = 30;
if (true) {
  const age = 40;
  let name = "John";
  console.log("Inside block:", age, name);

  if (true) {
    const age = 50;
    console.log("Inside nested block:", age);
  }
}

console.log("Outside block:", age, name);