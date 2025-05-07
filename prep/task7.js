
        const fs = require('node:fs');
        const readline = require('readline');
        const city = require('./cityData.json');
        
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });

        rl.question('Enter max rate: ', (rateInput) => {
          rateInput = parseFloat(rateInput.trim()); 
          console.log(`Max rate: ${rateInput}`);  

          const filtered  = city.neighborhoods.filter((n) => n.averageRent <= rateInput);
          console.log("Filtered neighborhoods: ", filtered);


          function formatNeighborhoods(data) {
            return data.map(item => {
              const [lm1, lm2] = item.landmarks;
              return `Name: ${item.name}\nAverageRent: ${item.averageRent}\nLandmarks: ${lm1}, ${lm2}\n`;
            }).join('\n');
          }
          
          //const dataString = JSON.stringify(filteredNeighborhoods, null, 2);

          const output = formatNeighborhoods(filtered);

          fs.writeFile('/Users/Marko/Documents/test.txt', output, err => {
                    if (err) {
                    console.error(err);
                    return;
                    }
                    // file written successfully
                    console.log('File written successfully');
            });

            rl.close();

          });