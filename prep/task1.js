
let myBoolean = true;

let myArray = [1, 2, 3, 4, 5];


const newArray = [];

for (let i = 0; i < 5; i++) {
        
         
          if (i === 4) {
                    for (let j = 0; j<myArray.length; j++){

                              newArray.push(myArray[j]*[j+3]);
                              
                                 
                    }
                    console.log(newArray);
                    
          }
          
          console.log(myBoolean, i); 
        }

       












