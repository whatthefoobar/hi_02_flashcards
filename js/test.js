import {flashcardList,qFlashcardList, aFlashcardList} from "./utils.js";
// console.log(Math.floor(Math.random()*(qFlashcardList.length + 1)));
// console.log(qFlashcardList.length);// 5

//make array of testQuestion and assign with forEach a q to each of them
const questions = document.querySelectorAll(".testQuestion");
const testQuestions = Array.from(questions);

//math random number of question and assign it to question 1, 2, 3

//make 3 unique random numbers and store them in an array- this holds the index no for the question list

function randomNumbers(quantity, max){
  const generatedNumbers = [];
  while(generatedNumbers.length < quantity){
    var number = Math.floor(Math.random() * max);
    if(generatedNumbers.indexOf(number) === -1) generatedNumbers.push(number);
  }
return(generatedNumbers);
}
// console.log(randomNumbers(3,3));
let randomNumberIndex = randomNumbers(3,4);
// console.log(randomNumberIndex);

// do a foreach to replace the h3 innerHtml of .testQuestion class with a random question from qFlashcardList array later checking it with the aFlashcardList array using the indexNo

testQuestions.forEach(function assignQuestions(testQuestion, index, testQuestions){
  testQuestions[index].innerHTML = aFlashcardList[randomNumberIndex[index]];
 });// assigns random question in order of index
//  console.log(aFlashcardList.indexOf(testQuestions[0].innerHTML));
console.log();
 
  // function checkAnswer(){
  //   let correctAnswers;
  //   if(aFlashcardList.indexOf(testQuestions[i].innerHTML)=== qFlashcardList.indexOf(answer written stored in local storage)){ 
  // correctAnswers++;} else{
  // correctAnswers+= 0;
  // }}
//    }
/*if index of qFlashcardList[index] is the same as aFlashcardList[index] then correctAnswers++ else +0;*/
// check indexOf the string answer and compare it to the question

// console.log(qFlashcardList.indexOf("what is love? Baby don't hurt me."));

//check that index number of question matches index number of answer if so correct answers=+1 else 0

//calculate correct numbers answers*100% testItemArray.length

//let the user know somehow which answers were correct and or provide correct answer next to it