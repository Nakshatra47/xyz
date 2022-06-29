
window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
};
const ans = [
     'b b',
     'k k'
    
];
  // To change level
  const currentLevel = levels.medium;
  
let time = currentLevel;
let score = 0;
let isPlaying=false;
let idx;
// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
    'hat',
    'king',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];
 function init(){
  let x=1;
    seconds.innerHTML = currentLevel;
    document.getElementById('current').innerHTML='Press enter key to start';
    wordInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' &&  isPlaying===false ) {
        scoreDisplay.innerHTML = score;
        isPlaying = true;
        message.innerHTML = '';
      time = currentLevel + 1;
      showWord(words);
      wordInput.addEventListener('input', startMatch);
      if(x==1){
      setInterval(countDown,1000);
      x=0;
      setInterval(checkStatus,15);}
      }
    });
    
    
    }
 
 function startMatch() {
  
    if (matchWords()) {
      isPlaying = true;
      time = currentLevel + 1;
      showWord(words);
      wordInput.value = '';
      score++;
    }
    if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {
        sessionStorage['highscore'] = score;
      } else {
        sessionStorage['highscore'] = sessionStorage['highscore'];
      }
    
      // Prevent display of High Score: -1
      if (sessionStorage['highscore'] >= 0) {
      highscoreDisplay.innerHTML = sessionStorage['highscore'];
      }
      if (score === -1) {
        scoreDisplay.innerHTML = 0;
    
      } else {
        scoreDisplay.innerHTML = score;
      }
    
}

 function matchWords() {
    
    if (wordInput.value.toLowerCase() === words[idx]) {
      message.innerHTML = 'Correct!!!';
      const col =document.querySelector(".msg")
       col.style.color = "green";
      
      return true;
    } else {
      message.innerHTML = '';
      return false;
    }
  }
 function showWord(words){
    const randIndex = Math.floor(Math.random()*words.length);
    idx=randIndex;
    currentWord.innerHTML=words[randIndex];
 }
 function countDown(){
  let x=new Date().getSeconds();
  if(x%2)
  {document.getElementById('tit').innerHTML='WordBeater';
  }else{
    document.getElementById('tit').innerHTML='WorldBeater';
  }

    if(time>0){
        time--;
    }else if(time===0){
        isPlaying=false;
    }
    timeDisplay.innerHTML=time;
 }
 function checkStatus() {
    if (!isPlaying && time === 0) {
      message.innerHTML = 'Game Over!!!';
      const col =document.querySelector(".msg")
       col.style.color = "red";
      score = 0;

       document.getElementById('current').innerHTML='Press enter key to play again';
 
    }
  }
  
