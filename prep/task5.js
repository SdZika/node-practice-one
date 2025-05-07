//for loop

// for (let i = 0; i < 5; i++) {
//   console.log(`Hello ${i}`);
// }

// // while loop

// let i = 0;
// while (i < 5) {
//   console.log(`Hello ${i}`);
//   i++;
// }   

// do while loop

// let j = 0;
// do {
//   console.log(`Hello ${j}`);
//   j++;
// } while (j < 5);

// // for of loop
// const letters = ['a', 'b', 'c'];
// for (const letter of letters) {
//   console.log(`Hello ${letter}`);
// }

// // for in loop


// const person = { name: 'John', age: 30 };

// console.log(`Hello ${person.name}`);

// for (const key in person) {
//   console.log("Hello: ", key, person[key]);
// }

const array = [1, 2, 3, 4, 5];

const newArray = array.map((item) => {
  return item;
});

console.log(newArray);
