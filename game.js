// Iteration 2: Generate 2 random number and display it on the screen

let num1_box = document.getElementById("number1") ;
let num2_box = document.getElementById("number2") ;

function generateRandomNumber(){
    num1 = Math.floor(Math.random()*100);
    num2 = Math.floor(Math.random()*100);

    num1_box.textContent=num1
    num2_box.textContent=num2
}
generateRandomNumber();

// Iteration 3: Make the options button functional

let score = 0

let greater_than = document.getElementById("greater-than")
let equal_to = document.getElementById("equal-to")
let lesser_than = document.getElementById("lesser-than")

greater_than.addEventListener('click', function check(){
    if (num1 > num2){
        score++ ;
        localStorage.setItem('score', score)
        generateRandomNumber()
        clearInterval(interval)
        startInterval()
    }
    else {
        location.href="./gameover.html"
    }

})

equal_to.addEventListener('click', function check(){
    if (num1 == num2){
        score++ ;
        localStorage.setItem('score', score)
        generateRandomNumber()
        clearInterval(interval)
        startInterval()
    }
    else {
        location.href="./gameover.html"
    }

})

lesser_than.addEventListener('click', function check(){
    if (num1 < num2){
        score++ ;
        localStorage.setItem('score', score)
        generateRandomNumber()
        clearInterval(interval)
        startInterval()
    }
    else {
        location.href="./gameover.html"
    }

})

// Iteration 4: Build a timer for the game

let timerbox = document.getElementById("timer");
let timer=5;
let interval;
function startInterval(){
    timer=5;
    interval = setInterval(()=>{
        timerbox.textContent = timer;
        timer--;

        if (timer == 0){
            clearInterval(interval)
            location.href="./gameover.html"
        }
    }, 1000);
}

console.log("score: ", score)
startInterval();
localStorage.setItem("score", score)