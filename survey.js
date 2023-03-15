const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer) => {
    let fName = answer;
  console.log(`Nice to meet you ${answer}`);
  rl.question('What do you enjoy doing? ', (answer) => {
    let activity = answer;
    console.log(`That's pretty cool! `);
    rl.question('What do you like to listen to while doing that? ', (answer) => {
        let music = answer;
        console.log('Sounds fun :)');
        rl.question('Which meal is your favorite to eat at (breakfast, lunch, etc.) ', (answer) =>{ 
            let meal = answer;
            rl.question(`What kind of ${answer} do you like to eat? `, (answer) => {
                let food = answer;
                console.log(`I can see why you like eating it`);
                rl.question('which sport is your absolute favourite? ', (answer) => {
                    let sport = answer
                    console.log('that\'s good to know')
                    rl.question('What\'s your superpower?(tell us what you\'re amazing at) ', (answer) => {
                        let superpower = answer;
                        console.log('That\'s great! here\'s your profile');
                        console.log(`${fName} enjoys ${activity} while listening to ${music}. ${fName} loves eating ${food} at ${meal}, and ${fName}\'s absolute\n favorite sport is ${sport}. ${fName} is also perfect at ${superpower}`);
                      rl.close(); 
                        });
                    });
                });
            });
        });
    });
});
