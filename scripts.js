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

    let rAmount = Math.floor(Math.random() * (8000 - 1000) + 1000);   // may cause issues, 0 no longer a valid case making "Coconut" less likely to appear
    let rAmoundRounded = Math.round(rAmount/1000)*1000;
    let rDuration = Math.floor(Math.random() * 8000);
    
    leftVal = rAmoundRounded;

    let backIMG = document.getElementsByClassName("leftLaneBoxImage");

    anime({
        targets: backIMG,
        translateY: rAmoundRounded,
        easing: 'spring(50, 1000, 5000, 0)',
        direction: 'normal',
        duration: rDuration,
      });
}

function machineSpinMiddle(){

    let rAmount = Math.floor(Math.random() * (8000 - 1000) + 1000);
    let rAmoundRounded = Math.round(rAmount/1000)*1000;
    let rDuration = Math.floor(Math.random() * 8000);

    midVal = rAmoundRounded


    let backIMG = document.getElementsByClassName("midLaneBoxImage");

    anime({
        targets: backIMG,
        translateY: rAmoundRounded,
        duration: rDuration,
        easing: 'spring(50, 1000, 5000, 0)',
        direction: 'normal',
        delay: 500
      });
}

function machineSpinRight(){

    let rAmount = Math.floor(Math.random() * (8000 - 1000) + 1000);
    let rAmoundRounded = Math.round(rAmount/1000)*1000;
    let rDuration = Math.floor(Math.random() * 8000);

    rightVal = rAmoundRounded;

    let backIMG = document.getElementsByClassName("rightLaneBoxImage");

    anime({
        targets: backIMG,
        translateY: rAmoundRounded,
        duration: rDuration,
        easing: 'spring(50, 1000, 5000, 0)',
        direction: 'normal',
        delay: 1000
      });
}

function spinValues(){
  valueL = leftVal;
  valueM = midVal;
  valueR = rightVal;

  switch (valueL){
    case 0:
    case 3000:
    case 6000:
      //document.getElementById("spinTextLeft").value = "Coconut";
      tValueL = "Coconut";
      break;
    case 1000:
    case 4000:
    case 7000:
      //document.getElementById("spinTextLeft").value = "Banana";
      tValueL = "Banana";
      break;
    case 2000:
    case 5000:
    case 8000:
      //document.getElementById("spinTextLeft").value = "Pineapple";
      tValueL = "Pineapple";
      break;
  }

  switch (valueM){
    case 0:
    case 3000:
    case 6000:
      //document.getElementById("spinTextMid").value = "Coconut";
      tValueM = "Coconut";
      break;
    case 1000:
    case 4000:
    case 7000:
      //document.getElementById("spinTextMid").value = "Banana";
      tValueM = "Banana";
      break;
    case 2000:
    case 5000:
    case 8000:
      //document.getElementById("spinTextMid").value = "Pineapple";
      tValueM = "Pineapple";
      break;
  }

  switch (valueR){
    case 0:
    case 3000:
    case 6000:
      //document.getElementById("spinTextRight").value = "Coconut";
      tValueR = "Coconut";
      break;
    case 1000:
    case 4000:
    case 7000:
      //document.getElementById("spinTextRight").value = "Banana";
      tValueR = "Banana";
      break;
    case 2000:
    case 5000:
    case 8000:
      //document.getElementById("spinTextRight").value = "Pineapple";
      tValueR = "Pineapple";
      break;
    default:
      //document.getElementById("spinTextRight").value = "null";
  }

  if (tValueL == tValueM && tValueL == tValueR){
    pointVal = pointVal + (baseBet * 4);
    document.getElementById("youWinText").value = "Jackpot! - " + baseBet * 4 + " Points";
  }
  else if (tValueL == tValueM && tValueL != tValueR){
    pointVal = pointVal + (baseBet * 2);
    document.getElementById("youWinText").value = "Match 2 - " + baseBet * 2 + " points";
  }
  else if (tValueL == tValueR && tValueL != tValueM){
    pointVal = pointVal + (baseBet * 2);
    document.getElementById("youWinText").value = "Match 2 - " + baseBet * 2 + " points";
  }
  else if (tValueM == tValueR && tValueM != tValueL){
    pointVal = pointVal + (baseBet * 2);
    document.getElementById("youWinText").value = "Match 2 - " + baseBet * 2 + " points";
  }
  else {
    document.getElementById("youWinText").value = " ";
  }

  document.getElementById("pointVal").value = pointVal;
}

function pointValue(){
 
  if (pointVal == 0){
    document.getElementById("youLoseText").value = "You Lose! giving 100 points";
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
  setTimeout(spinEnable, 8000);
}

function spinEnable(){
  document.getElementById("spinButton").disabled = false;
  document.getElementById("betUpButton").disabled = false;
  document.getElementById("betDownButton").disabled = false;
  document.getElementById("betResetButton").disabled = false;
  document.getElementById("maxBetButton").disabled = false;
}

function spinValueTimer() {
  setTimeout(spinValues, 6000);
}

function pointValueTimer() {
  setTimeout(pointValue, 6000);
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