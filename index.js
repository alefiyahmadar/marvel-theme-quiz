

var chalk = require('chalk');

var readlineSync = require("readline-sync")

var score = 0

var highScore = [
  {
  name : "alefiyah",
  score : 10
},{
  name : "rashida",
  score : 9
},
 ]

console.log(chalk.bold.green("NICK FURY WANTS TO KNOW YOUR NAME ") )


var userName=readlineSync.question(console.log(chalk.italic.blue("please enter your name")))


var welcomeMessage=("welcome " + userName + " to the ultimate marvel Q&A" + " in order to be the part of EARTHS MIGHTIEST HEROES you have to be remarkable in this quiz ")

console.log(chalk.bold.magenta(welcomeMessage))



function play(question,answer){

  

var userAnswer=readlineSync.question(question)
  

if (userAnswer.toUpperCase()===answer.toUpperCase()){

  console.log(userAnswer.toLowerCase())
  
console.log(chalk.bgGreen("you are right!"))
score = score + 1
  
} else {
  console.log(chalk.bgRed("you are wrong!"))
  // score = score - 1



console.log(chalk.black("_______________________________________________________________"))
}
}
var questions=[ {
question:(chalk.red("AVENGERS WERE FORMED BY NICK FURY TO SAVE THE EARTH FROM WHOM IN AVENGERS PRT 1")),
  answer:("loki"),
},{
  question:(chalk.magenta("THE S.H.I.E.L.D IS LED BY WHOM ")),
   answer:("NICK FURY"),
 },{
  question:(chalk.magenta("NAME THE WEAPON FORGER WHO HELPED THOR IN MAKING OF STORMBREAKER  ")),
  answer:("EITRI")
 },{
  question:(chalk.white("WHICH AVENGER OCCUPIED THE MIND STONE ")),
  answer:("VISION")
 },{
  question:(chalk.cyan("NAME THE HOME PLANET OF THANOS ")),
  answer:("TITAN")
 },{
  question:(chalk.yellow("VIBRANIUM IS FROM WHICH COUNTRY  ")),
  answer:("WAKANDA")
 },{
  question:(chalk.red("CAPTAIN AMERICA'S SHIELD IS MADE UP OF WHICH MATERIAL ")),
               answer:("VIBRANIUM")

  },{
   question:(chalk.white("WHO IS THE FIRST FEMALE AVENGER  " )),
  answer:("BLACK WIDOW")
 },{
  question:(chalk.magenta("WHO IS THE FIRST ORIGINAL AVENGER  ")),
  answer:("CAPTAIN AMERICA")
 },{
  question:(chalk.white("WHO IS THE OLDEST AVENGER  ")),
  answer:("THOR")
 }


               
]

for (var i=0; i<questions.length; i++){

var currentQuestion=questions[i]

play(currentQuestion.question,currentQuestion.answer)
  }
  
   console.log(chalk.bold.cyan("YOUR SCORE IS " + score))
console.log("THE HIGHEST SCORER'S ARE " )

for (var i=0; i<highScore.length; i++){

 var currenthighScore=highScore[i]




console.log(currenthighScore.name)
console.log(currenthighScore.score)
}
