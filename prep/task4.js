const readline = require('readline');

const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
    rl.question('Enter your name: ', (nameInput) => {
          rl.question('Enter your surname: ', (surnameInput) => {

              let name = nameInput.trim().toLocaleLowerCase();
              let surname = surnameInput.trim().toLocaleLowerCase();

              const askAge = () => {
              rl.question('Please enter your age: ', (ageInput) => {
                if (isNaN(ageInput) || ageInput < 3) {
                  console.log('Invalid age. Please enter a number greater then 2.');
                  return askAge();
                }
              
              let age = Math.floor(parseInt(ageInput.trim(), 10) / 3);

              name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length-1) + name.slice(-1).toUpperCase();
              surname = surname.slice(0, 1).toUpperCase() + surname.slice(1, surname.length-1) + surname.slice(-1).toUpperCase();

              for (let i = 0; i < age; i++) {
                if (i % 2 === 0) {
                  console.log(`Hello ${name}, you are ${age} years old!`);
                }
                else {
                  console.log(`Hello ${surname} , you are ${age} years old!`);
                }
              } 
              rl.close();
          });
        }
        askAge();
      });
    }); 

