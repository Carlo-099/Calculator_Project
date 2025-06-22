
// JavaScript for controlling the quiz functionality
// Selecting relevant elements from the HTML
const startBtn = document.querySelector(".start-btn");
const main = document.querySelector(".main");
const quizSection = document.querySelector(".quiz-section");
// Quiz related elements
const home =document.querySelector(".home");
const homecontent =document.querySelector(".home-content p ");
const homebtn =document.querySelector(".home-content .start-btn ");
const homeimg =document.querySelector(".home-content img");
//
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");

// Event handlers for buttons
startBtn.onclick = () => {
quizSection.classList.add("active");
quizBox.classList.add("active");
home.classList.add("active");
homecontent.classList.add("active");
homebtn.classList.add("active");
homeimg.classList.add("active");
main.classList.add("active");


showQuestions(0);
questionCounter(1);
headerScore();
}

tryAgainBtn.onclick = () => {
quizBox.classList.add("active");
nextBtn.classList.remove("active");
resultBox.classList.remove("active");

 questionCount = 0; 
 questionNumb = 1; 
 useScore = 0;

showQuestions(questionCount);
questionCounter(questionNumb);

headerScore();
}

// itong part na ito ay para sa (Next) na botton ng quizbox para lumipat ang mga tanong

let questionCount = 0; //dito ako nagkamali (;)
let questionNumb = 1;
let useScore = 0;

const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
if (questionCount < question.length -1){ //ito ang lalalbas kapag tapos na ang pag take ng quiz
questionCount++;
showQuestions(questionCount);

    questionNumb++;
    questionCounter(questionNumb);

    nextBtn.classList.remove('active');
 }
 else {
    console.log('Quest Completed');
    showResultBox();
 }
}

const optionList = document.querySelector(".option-list");

//getting question and options from arrays

function showQuestions(index){
const questionText = document.querySelector(".question-text");
questionText.textContent = `${question[index].numb}. ${question[index].question}`; //dito ako nagkamali (``)(``)

let optionTag = `<div class="option"><span>${question[index].option[0]}</span> </div> 
    <div class="option"><span>${question[index].option[1]}</span> </div>
    <div class="option"><span>${question[index].option[2]}</span> </div>`;  
//sa optiontag nagkamali ako sa (s) ng questions and options ko
optionList.innerHTML = optionTag;

const option = document.querySelectorAll(".option");
for (let i = 0; i < option.length; i++){
option[i].setAttribute("onclick","optionSelected(this)");
}

}
//nagkamali ako dito sa (s) ng question at the same time sa (===) dalawang == kasi una kong nilagay witch means cinocompare ko lang sila apg ganon.

function optionSelected(answer){
let userAnswer = answer.textContent.trim();
let correctAnswer = question[questionCount].answer;
let allOptions = optionList.children.length;

if(userAnswer === correctAnswer){ 
    console.log('answer is correct');
    answer.classList.add('correct');
    useScore += 1;
    headerScore();

}
else{
    console.log('answer is wrong');
    answer.classList.add('incorrect');

    //if answer is incorrect, auto selected correct answer
    // kulang ako ng trim and (=) kaya hindi sya gumana noong una.
    
 for(let i = 0; i < allOptions; i++){
    if (optionList.children[i].textContent.trim()  === correctAnswer) {
        optionList.children[i].setAttribute('class','option correct');
    }
 }
}

 //of user has selected, disable all options

 for(let i = 0; i < allOptions; i++){
    optionList.children[i].classList.add('disabled');
 }

 nextBtn.classList.add('active');
}

// ang line questionCounter para ito sa line "question-total" sa hmtl
function questionCounter(index){
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${question.length} Questions`;
} 
// para ito sa header-score na nasa HTML
function headerScore(){
  const headerScoreText = document.querySelector('.header-score');
  headerScoreText.textContent = `score: ${useScore} / ${question.length}`;
}
function showResultBox() {
quizBox.classList.remove('active');
resultBox.classList.add('active');

const scoreText = document.querySelector('.score-text');
scoreText.textContent = `Your Score ${useScore} out of ${question.length}`;

const circularProgress = document.querySelector('.circular-progress');
const progressValue = document.querySelector('.progress-value');
let progressStartValue = -1;
let progressEndValue = (useScore / question.length) * 100;
let speed = 20;

let progress = setInterval(() => {
    progressStartValue++;
    console.log(progressStartValue);

    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(green ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
},speed);
}