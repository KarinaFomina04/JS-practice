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

console.log('Igor');

const user = fetch('https://www.google.com/')
  .then((res) => {
    console.log(res.status);
  });

setTimeout(() => {
  console.log('Ekaterina');
}, 100);

Promise.resolve('Ksenia').then(console.log);

setTimeout(() => {
  console.log('Olga');
}, 500);
```