// make side nav bar slide

const body = document.querySelector("body");
const navToggleBtn = document.querySelector(".navToggleBtn");

navToggleBtn.addEventListener("click",function(){
body.classList.toggle("activeNav");
});

// flashcard code

const cardContainer = document.querySelector(".cardContainer");
const card = document.querySelector(".card");
let rotated = false; // starts on the front side of the card
let currentCard = 0;
const soundBtn = document.querySelector(".soundBtn");

/*create a toggle rotate effect*/

cardContainer.addEventListener("click", function(){
  if(rotated == false){
    card.style.transform = "rotateY(180deg)";
    rotated = true;

  }else if(rotated == true){
    card.style.transform = "rotateY(360deg)";
    rotated = false;
  } 
});
/* array of objects, where the objects have a question and answer*/

const flashcardList = [
  { question: "what is love? Baby don't hurt me.",
    answer: "爱是什么？宝贝，别伤害我。<br> Ài shì shénme? Bǎobèi, bié shānghài wǒ." },
  { question: "I don't speak Chinese. Why do you ask?",
    answer: "我不会说中文。 为什么你要问？<br> Wǒ bù huì shuō zhōngwén. Wèishéme nǐ yào wèn?" },
  { question: "Are you talking to me?",
    answer: "你在和我说话吗?<br>Nǐ zài hé wǒ shuōhuà ma?" },
  { question: "Wait a minute,you're is not my wife!",
    answer: "等一下，你不是我的妻子！<br> Děng yīxià, nǐ bùshì wǒ de qīzi!" },
  { question: "Does this smell like chloroform to you?",
    answer: "这闻起来像氯仿吗？<br>Zhè wén qǐlái xiàng lǜfǎng ma?" },    
];

/* create a map() array method that makes 2 subarrays one of questions and one of answers*/

let qFlashcardList = flashcardList.map(function(flashcard){
  return flashcard.question;
});

let aFlashcardList = flashcardList.map(function(flashcard){
  return flashcard.answer;
});

/*assign each question to the front and each answer to the back of the card accesing the 2 arrays and using currentCard as the start index number*/

const frontCard = document.getElementById("frontCard");
const backCard = document.getElementById("backCard");

function showCard(currentCard){
  frontCard.innerHTML= qFlashcardList[currentCard];
  backCard.innerHTML= aFlashcardList[currentCard];
};  

/*currentCard is the start index no which gets incremented or decremented when the ctrl buttons are clicked*/

/*activate next random and previous buttons so that they trigger specific Q and A*/
const title = document.querySelectorAll(".title");
const prevBtn = document.querySelector("#prevBtn");
const startBtn = document.querySelector("#startBtn");
const nextBtn = document.querySelector("#nextBtn");

function clickPrev(){
  currentCard--;
  if (currentCard < 0) {
    currentCard = qFlashcardList.length - 1;
  }
  showCard(currentCard);
  title[0].classList.add("hidden");
  title[1].classList.add("hidden");
  soundBtn.classList.remove("hidden");
};
function clickStart() {
  currentCard = 0;
  showCard(currentCard);
  title[0].classList.add("hidden");
  title[1].classList.add("hidden");
  soundBtn.classList.remove("hidden");
};
function clickNext() {
  currentCard++;
  if (currentCard > qFlashcardList.length - 1) {
    currentCard = 0;
  }
  showCard(currentCard); //`${currentCard + 1}`
  title[0].classList.add("hidden");
  title[1].classList.add("hidden");
  soundBtn.classList.remove("hidden");
};

prevBtn.addEventListener("click",clickPrev);
startBtn.addEventListener("click", clickStart);
nextBtn.addEventListener("click",clickNext);

/* array of objects, where the objects have a question and answer*/
/*add an audio button for audio files*/

const soundList = [
  "sounds/a1.mp3" ,
  "sounds/a2.mp3" ,
  "sounds/a3.mp3" ,
  "sounds/a4.mp3" ,
  "sounds/a5.mp3" ,
];

let playSound = new Audio();
function addSound(currentCard) {
  playSound.src= soundList[currentCard]; 
 };

// soundBtn.addEventListener("click", playSound);

soundBtn.addEventListener("click",function(e){
  e.stopPropagation();  
  addSound(currentCard); //without this the first answer audio plays 
  playSound.play();
});


