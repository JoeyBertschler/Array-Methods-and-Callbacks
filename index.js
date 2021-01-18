import { fifaData } from './fifa.js';











/* ⚽️ Task 1: accessing data by console.log-ing the following pieces of data note,  may want to filter data first*/

//(a) Home Team name for 2014 world cup final
let homeTeam2014Fin = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === "Final"
  });
  console.log(homeTeam2014Fin[0]["Home Team Name"]) //how find uniqye object key value in array if index unknown?

//(b) Away Team name for 2014 world cup final
"Away Team Name"

// I was thinking of creating a function for repeatability but got stuck on it and moved on.

// function xFor2014WorldCupFinal(categorie, value){
//     let desired = xFor2014WorldCupFinal
// }
// xFor2014WorldCupFinal(stage, "Final") //not sure how to... && item.categorie === value; ? item.xFor2014WorldCupFinal ?..
//  })

//(c) Home Team goals for 2014 world cup final
"Home Team Goals"

//(d) Away Team goals for 2014 world cup final
"Away Team Goals"

//(e) Winner of 2014 world cup final */
// indirectly solved it. please tell me a more efficient way, this one is a mess

let homeTeam2014Final = fifaData.filter(function(item){
  
    //   // to store&check winner name in case of draw (penalty winner) 
      let penaltyHome = item["Home Team Name"];
      let  penaltyAway = item["Away Team Name"];
      let  penaltyCheck1 = penaltyHome.includes(item['Win conditions']) //true if home team won bp
      let penaltyCheck2 = penaltyAway.includes(item['Win conditions']) //true if away team won bp
       //console.log(penaltyCheck1, penaltyCheck2)
      
      //>>>>>>>>>>>>>>>>>>>scope question - will the variables be accessible outside of this filter function? if yes, why
      
      //return base
      return item.Year === 1930 && 
             item.Stage === "Group 1";
       });
    console.log(homeTeam2014Final[0]["Home Team Name"] + "2")
        //add new key&value with who the winner is to array
    
           //test
           // var obj = {key1: 1, key2: 2};
           // obj.key3 = 3
           // console.log(obj)
    
           // disfunctional: fifaData is array, must pass to object IN array
           // fifaData['Winner']// = 0;
           // console.log(fifaData)
    
      let winner = ""
        
                if(
        //case 1 - no penalty winner
        //home team wins
             homeTeam2014Final[0]["Home Team Goals"] + homeTeam2014Final[0]["Half-time Home Goals"] >
             homeTeam2014Final[0]["Away Team Goals"] + homeTeam2014Final[0]["Half-time Away Goals"]){
             let winner = homeTeam2014Final[0]["Home Team Name"]
           }
            else if(
                  //away team wins
             homeTeam2014Final[0]["Home Team Goals"] + homeTeam2014Final[0]["Half-time Home Goals"] <
             homeTeam2014Final[0]["Away Team Goals"] + homeTeam2014Final[0]["Half-time Away Goals"]
             
            ) {
              let winner = homeTeam2014Final[0]["Away Team Name"]
            } else if (
        //case 2 - penalty winner
        //home team wins by penalty
             penaltyCheck1 == true) {
               let winner = homeTeam2014Final[0]["Home Team Name"]
            } else if(
        //away team wins by penalty
             penaltyCheck2 == true ) {
     let winner = homeTeam2014Final[0]["Away Team Name"] 
     }
             
             
             console.log(winner)















/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data 
of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    let newArr = [];
        data.filter(function(item){ //or set up array and push data =[], 
            if (item.Stage === "Final"){
                newArr.push(item) //kinda same as data[0] in regards to output this one, next [1]
            }
        });
    return newArr;
} // the function goes from { to } and doesn't auto-invoke (cb)

getFinals(fifaData);

//old attempts

// let homeTeam2014Final = fifaData.filter(function(item){
//     return item.Year === 1930 && item.Stage === "Group 1";
//   })
//   console.log(homeTeam2014Final) //use index i.e. [0]

// function getFinals(data) {

// data.filter((team) => {
//     return team.Stage == "Final";
// })

// getFinals(fifaData);












/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following:   //higher order = function with function inside / oberfunktion
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

// attempt 7 - item.Year not item.Years, .map(function(item){.......}); for syntax
console.log("ran")
function getYears(arr,cb) {
    let allFinalsArr = cb(arr);
    let years = [];
    allFinalsArr.map(function(item){
      years.push(item.Year);
    });
    return years;
}
//getYears(fifaData,getFinals) // getFinals = array of objects with final stage teams
console.log(getYears(fifaData,getFinals))

// attempt 6
//console.log("ran")
// function getYears(arr,cb) {
//     let allFinalsArr = cb(arr);
//     let years = [];
//     allFinalsArr.map(function(item){
//       years.push(item.Years);
//     });
//     return years;
// }
// getYears(fifaData,getFinals) // getFinals = array of objects with final stage teams
// // why not run?


//console.log("ran")
//attempt 5, 3-4 in codepen
// function getYears(arr,cb) {
//     let allFinalsArr = cb(arr);
//     let years = [];
//     allFinalsArr.map(function(item){
//       years.push(item.Years);
//     });
//     return years;
// }
// getYears(fifaData,getFinals) // getFinals = array of objects with final stage teams
// why not run?

// first attempt
// function getYears(arr,cb) {
//     let allFinalsArr = cb(arr)
//     let years = []
//     allFinalsArr.map(Function(arr))
//    return years
// }
// getYears(fifaData,getFinals) // getFinals = array of objects with final stage teams









/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(arr,cb) {
    let allFinalsGames = cb(arr);
   // if (allFinalsGames winner = // how?
   // away win
    let awayWin = allFinalsGames.filter(teamName => {
      return teamName["Away Team Goals"] > teamName["Home Team Goals"]
         });
      // home win //indention buggy, reinstall vsc? huge hassle to constantly re-edit every new line
     // simply pressed enter yet indention changed by -1, what is going on
      // pressed enter again, this time prior indention, mega confused
//shift enter indention
      //enter indention
     //buggy enter indention
      let homeWin = allFinalsGames.filter(teamName => {
      return teamName["Home Team Goals"] > teamName["Away Team Goals"]
      //why did this random empty line appear? why is ]); suddenly one line further down below. this is incredibly frustrating
    });
    let winner1 = awayWin.map (team =>team["Away Team Name"]);
    let winner2 = awayWin.map (team =>team["Home Team Name"]);
    let winner = winner1.concat(winner2); //got the concat approach idea from yonathan
  //cant figure out how to clear the penalty ties. tried it in task 1 part 4 too
  return winner
}
console.log(getWinners(fifaData,getFinals))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following: //function with a function inside
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(arr, cb1, cb2) {
    let cb1arr = cb1
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(/* code here */) {
   /* code here */
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
