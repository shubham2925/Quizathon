const readLineSync = require('readline-sync');
const name = readLineSync.question('Welcome to Quizathon..\nWhat is your name?\n');
console.log(`Hello ${name}.\n\nLet's start.\n\n`);
console.log("Let me guide you through some rules:-\n\n1.There are five questions each containing 1 mark.\n2.There is no negative marking.\n3.Your total score will be calculated after the quiz.\n\n");
const Question=[
  {
    question:"Which football player recently became the highest goal scorer for a single club?",
    answer:{
      a:"Cristiano Ronaldo",
      b:"Neymar Jr.",
      c:"Luis Suarez",
      d:"Lionel Messi"
    },
    correctanswer:"d"
  },
  {
    question:"Which club won the UEFA champions league 2020?",
    answer:{
      a:"Barcelona",
      b:"Real Madrid",
      c:"Bayern Munich",
      d:"Chelsea"
    },
    correctanswer:"c"
  },
   {
    question:"Which of the following clubs have Cristiano Ronaldo not played for?",
    answer:{
      a:"Juventus",
      b:"Real Madrid",
      c:"Liverpool",
      d:"Manchester United"
    },
    correctanswer:"c"
  },
   {
    question:"Which country have won the FIFA world cup for most number of times?",
    answer:{
      a:"Brazil",
      b:"Germany",
      c:"Argentina",
      d:"Spain"
    },
    correctanswer:"a"
  },
   {
    question:"Which player have scored the highest number of official goals in football history?",
    answer:{
      a:"Ronaldo",
      b:"Pele",
      c:"Diego Maradona",
      d:"Zinedine Zidane"
    },
    correctanswer:"b"
  },
];
let score=0;
for(let i=0;i<5;i++){
  console.log(Question[i].question);
  console.log("a: ",Question[i].answer.a);
  console.log("b: ",Question[i].answer.b);
  console.log("c: ",Question[i].answer.c);
  console.log("d: ",Question[i].answer.d);
  const readLineSync = require('readline-sync');
const option = readLineSync.question('Enter your option\n');
console.log(`You entered ${option}`);
let correctanswer=Question[i].correctanswer;
if(option===correctanswer){
  console.log("**(Your answer is correct.)**\n\n");
  score++;
}
else{
  console.log("**(You are wrong.)**\n");
  console.log(`Correct answer is: ${Question[i].correctanswer}\n`);
}
}
console.log("Calculating your score.....");
console.log("Your score is: " +score+ " / 5.");