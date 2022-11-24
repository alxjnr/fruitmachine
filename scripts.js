let leftVal;
let midVal;
let rightVal;

let tValueL;
let tValueM;
let tValueR;

let pointVal = 200;

let baseBet = 5;

let spinSound1 = new Audio("music/test2.mp3");

function machineSpinLeft(){

    let rAmount = Math.floor(Math.random() * (24000 - 1000) + 1000);   // may cause issues, 0 no longer a valid case making "Coconut" less likely to appear
    let rAmoundRounded = Math.round(rAmount/1000)*1000;
    let rDuration = Math.floor(Math.random() * 24000);
    
    leftVal = rAmoundRounded;

    let backIMG = document.getElementsByClassName("leftLaneBoxImage");

    anime({
        targets: backIMG,
        translateY: {
          value: rAmoundRounded,
          duration: 8500 },
        easing: 'spring(35, 1000, 5000, 0)',
        direction: 'normal',
      });

      document.getElementById("betAmountTest").textContent = 'hello';
}

function machineSpinMiddle(){

    let rAmount = Math.floor(Math.random() * (24000 - 1000) + 1000);
    let rAmoundRounded = Math.round(rAmount/1000)*1000;
    let rDuration = Math.floor(Math.random() * 24000);

    midVal = rAmoundRounded


    let backIMG = document.getElementsByClassName("midLaneBoxImage");

    anime({
      targets: backIMG,
      translateY: {
        value: rAmoundRounded,
        duration: 8500 },
      easing: 'spring(35, 1000, 5000, 0)',
      direction: 'normal',
    });
}

function machineSpinRight(){

    let rAmount = Math.floor(Math.random() * (24000 - 1000) + 1000);
    let rAmoundRounded = Math.round(rAmount/1000)*1000;
    let rDuration = Math.floor(Math.random() * 24000);

    rightVal = rAmoundRounded;

    let backIMG = document.getElementsByClassName("rightLaneBoxImage");

    anime({
      targets: backIMG,
      translateY: {
        value: rAmoundRounded,
        duration: 8500 },
      easing: 'spring(35, 1000, 5000, 0)',
      direction: 'normal',
    });
}

function spinValues(){
  valueL = leftVal;
  valueM = midVal;
  valueR = rightVal;

  switch (valueL){
    case 2000:
    case 6000:
    case 10000:
    case 14000:
    case 18000:
    case 22000:
      tValueL = "Coconut";
      break;
    case 4000:
    case 8000:
    case 12000:
    case 16000:
    case 20000:
    case 24000:
      tValueL = "Banana";
      break;
    case 1000:
    case 5000:
    case 9000:
    case 13000:
    case 17000:
    case 21000:
      tValueL = "Pineapple";
      break;
    case 3000:
    case 7000:
    case 11000:
    case 15000:
    case 19000:
    case 23000:
      tValueL = "Watermelon";
  }

  switch (valueM){
    case 2000:
    case 6000:
    case 10000:
    case 14000:
    case 18000:
    case 22000:
      tValueM = "Coconut";
      break;
    case 4000:
    case 8000:
    case 12000:
    case 16000:
    case 20000:
    case 24000:
      tValueM = "Banana";
      break;
    case 1000:
    case 5000:
    case 9000:
    case 13000:
    case 17000:
    case 21000:
      tValueM = "Pineapple";
      break;
    case 3000:
    case 7000:
    case 11000:
    case 15000:
    case 19000:
    case 23000:
      tValueM = "Watermelon";
  }

  switch (valueR){
    case 2000:
    case 6000:
    case 10000:
    case 14000:
    case 18000:
    case 22000:
      tValueR = "Coconut";
      break;
    case 4000:
    case 8000:
    case 12000:
    case 16000:
    case 20000:
    case 24000:
      tValueR = "Banana";
      break;
    case 1000:
    case 5000:
    case 9000:
    case 13000:
    case 17000:
    case 21000:
      tValueR = "Pineapple";
      break;
    case 3000:
    case 7000:
    case 11000:
    case 15000:
    case 19000:
    case 23000:
      tValueR = "Watermelon";
  }

  if (tValueL == tValueM && tValueL == tValueR){
    pointVal = pointVal + (baseBet * 4);
    document.getElementById("youWinText").value = "Jackpot! - " + baseBet * 4 + " points";


  }
  else if (tValueL == tValueM && tValueL != tValueR){
    pointVal = pointVal + (baseBet * 2);
    document.getElementById("youWinText").value = "Match 2! " + baseBet * 2 + " points";

  }
  else if (tValueL == tValueR && tValueL != tValueM){
    pointVal = pointVal + (baseBet * 2);
    document.getElementById("youWinText").value = "Match 2! " + baseBet * 2 + " points";

  }
  else if (tValueM == tValueR && tValueM != tValueL){
    pointVal = pointVal + (baseBet * 2);
    document.getElementById("youWinText").value = "Match 2! " + baseBet * 2 + " points";

  }
  else {
    document.getElementById("youWinText").value = " ";
  }

  document.getElementById("pointVal").value = pointVal;
}

function pointValue(){
 
  if (pointVal == 0){
    document.getElementById("youLoseText").value = "You Lose! giving 100p";
    pointVal = 100;
    document.getElementById("pointVal").value = pointVal;
    document.getElementById("currentBet").value = 5;
  }
  else {
    document.getElementById("youLoseText").value = " ";
  }
}

function betUp(){

  baseBet += 5;
  if (baseBet > pointVal){
    baseBet = pointVal;
  }
  document.getElementById("currentBet").value = baseBet;

}

function basePointValue() {
  pointVal = pointVal - baseBet;
  document.getElementById("pointVal").value = pointVal;
}

function betDown(){

  if (baseBet < 10){
    baseBet = 10;
  }
  baseBet -= 5;
  document.getElementById("currentBet").value = baseBet;

}

function maxBet(){
  baseBet = pointVal;
  document.getElementById("currentBet").value = baseBet;
}

function betReset(){
  baseBet = 5;
  document.getElementById("currentBet").value = baseBet;
}

function spinDisable(){
  document.getElementById("spinButton").disabled = true;
  document.getElementById("betUpButton").disabled = true;
  document.getElementById("betDownButton").disabled = true;
  document.getElementById("betResetButton").disabled = true;
  document.getElementById("maxBetButton").disabled = true;
  setTimeout(spinEnable, 6000);
}

function spinEnable(){
  document.getElementById("spinButton").disabled = false;
  document.getElementById("betUpButton").disabled = false;
  document.getElementById("betDownButton").disabled = false;
  document.getElementById("betResetButton").disabled = false;
  document.getElementById("maxBetButton").disabled = false;
}

function spinValueTimer() {
  setTimeout(spinValues, 5000);
}

function pointValueTimer() {
  setTimeout(pointValue, 5000);
}

function inputReset() {
  document.getElementById("youWinText").value = " ";
}

function backgroundMusic() {
  let myAudio = document.querySelector('#audio')
  myAudio.play()
  myAudio.volume = 0.5;
}

function spinSound(){
  spinSound1.play();
}

/* 1 - pineapple
2 - coconut
3 - watermelon
4 - banana
5 - pineapple
6 - coconut
7 - watermelon
8 - banana
9 - pineapple
10 - coconut
11 - watermelon
12 - banana
13 - pineapple
14 - coconut
15 - watermelon
16 - banana
17 - pineapple
18 - coconut
19 - watermelon
20 - banana
21 - pineapple
22 - coconut
23 - watermelon
24 - banana


pineapple - 3
coconut - 3
watermelon - 3
banana - 3 */
