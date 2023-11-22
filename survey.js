const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInfo = {};


rl.question('Whats your name? nicknames are also acceptable :):  ', (name) => {
    userInfo.name = name;
    rl.question('Whats an activity you like doing?:  ', (activity) => {
      userInfo.activity = activity;
      rl.question(`What do you listen to while doing that:  `, (music) => {
        userInfo.music = music;
        rl.question(`Which meal is your Fav (Dinner, Breakfast):  `, (meal) => {
          userInfo.meal = meal;
          rl.question(`Whats your fav thing to eat for that meal:  `, (food) => {
            userInfo.food = food;
            rl.question(`Whats your fav sport:  `, (sport) => {
              userInfo.sport = sport;
              rl.question(`What is your super power in a few words:  `, (superPower) => {
                userInfo.superPower = superPower;
                funProfile(userInfo);
                rl.close();
              });
            });
          });
        }); 
      });
    });
  
});

const funProfile = (obj) => {
  console.log(`Hello World I am ${obj.name}, When I'm not saving the world from evil I like to ${obj.activity}, while listening to some ${obj.music}. When I am saving the world from evil I always need to get in some ${obj.meal} specifically ${obj.food}. I may not be the best at ${obj.sport} but we love things we arent good at. Saving the world from evil is not my only super power i can also ${userInfo.superPower}`);
}