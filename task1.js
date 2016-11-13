function first() {
  console.log(1);
  second();
  console.log(2);
}

function second() {
  console.log(3);
  third();
  console.log(4);
}

function third() {
  console.log(5);
}

first();


console.log('Hello World');