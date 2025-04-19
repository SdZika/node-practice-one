let myBoolean = true;

let myArray = [1, 2, 3, 4, 5];
let newArray;


for (let i = 0; i < 5; i++) {

    if (i === 4) {
    const newArray = myArray.map((item, index) => item = item * (index+3));
    console.log(newArray);
    }
    console.log(myBoolean, i);
    }     

    
