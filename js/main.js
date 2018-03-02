
var number = document.getElementById("number_container");
var outcome = document.getElementById("outcome");
var numberButtons = document.getElementsByClassName('buttonNumber');
var wrongOne = document.getElementById("wrong");
var rightOne = document.getElementById("right");

var counter = 0;
var interval;

function reset(){
  number.innerHTML = "";
  outcome.innerHTML = "";
  enableButtons();
  rightOne.style.visibility = 'visible';
  wrongOne.style.visibility = 'visible';
  clearInterval(interval);
}

function rightCode() {
  counter++;
  if (rightOne.style.visibility == 'visible') {
      rightOne.style.visibility = 'hidden';
  }else {
      rightOne.style.visibility = 'visible';
  }

  if(counter == 11){
    clearInterval(interval);
    counter = 0;
  }
}

function wrongCode() {
  counter++;
  if (wrongOne.style.visibility == 'visible') {
      wrongOne.style.visibility = 'hidden';
  }else {
      wrongOne.style.visibility = 'visible';
  }

  if(counter == 11){
    clearInterval(interval);
    counter = 0;
  }
}

function disableButtons() {
	for(buttons=0; buttons < numberButtons.length; buttons++) {
		numberButtons[buttons].setAttribute('disabled', 'disabled');
	}
}

function enableButtons() {
	for(buttons=0; buttons < numberButtons.length; buttons++) {
		numberButtons[buttons].removeAttribute('disabled');
	}
}

function getNumber(button) {
    number.innerHTML += button.value;

    if(number.innerHTML.length >= 3) {
        if (number.innerHTML == 331) {
            outcome.innerHTML = "Correct";
            disableButtons();
            interval = setInterval(rightCode,500);
        } else {
            outcome.innerHTML = "In Correct";
            disableButtons();
            interval = setInterval(wrongCode,500);
        }
    }
}
