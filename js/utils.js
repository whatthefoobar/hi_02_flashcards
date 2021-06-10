/* array of objects, where the objects have a question and answer*/

 export const flashcardList = [
  { question: "what is love? Baby don't hurt me.",
    answer: "爱是什么？宝贝，别伤害我 <br> Ài shì shénme? Bǎobèi, bié shānghài wǒ." },
  { question: "I don't speak Chinese. Why do you ask?",
    answer: "我不会说中文。 为什么你要问？<br> Wǒ bù huì shuō zhōngwén. Wèishéme nǐ yào wèn?" },
  { question: "Are you talking to me?",
    answer: "你在和我说话吗?<br>Nǐ zài hé wǒ shuōhuà ma?" },
  { question: "Wait a minute,you're is not my wife!",
    answer: "等一下，你不是我的妻子！<br> Děng yīxià, nǐ bùshì wǒ de qīzi!" },
  { question: "Does this smell like chloroform to you?",
    answer: "这闻起来像氯仿吗？<br>Zhè wén qǐlái xiàng lǜfǎng ma?" },    
];

{/* <br> Ài shì shénme? Bǎobèi, bié shānghài wǒ. */}

/* create a map() array method that makes 2 subarrays one of questions and one of answers*/

export let qFlashcardList = flashcardList.map(function(flashcard){
  return flashcard.question;
});

export let aFlashcardList = flashcardList.map(function(flashcard){
  return flashcard.answer;
});