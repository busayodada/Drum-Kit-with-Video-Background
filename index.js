let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    
    case "a":
      let agogo = new Audio("sounds/tom-2.mp3");
      agogo.play();
      break;

    case "s":
      let sekere = new Audio('sounds/tom-3.mp3');
      sekere.play();
      break;

    case "d":
      let drum = new Audio('sounds/tom-4.mp3');
      drum.play();
      break;

    case "f":
      let trumpet = new Audio("sounds/tom-1.mp3");
      trumpet.play();
      break;

    case "g":
      let goje = new Audio("sounds/boom.wav");
      goje.play();
      break;

    case "h":
      let balafon = new Audio("sounds/tink.wav");
      balafon.play();
      break;

    case "j":
      let bata = new Audio('sounds/snare.mp3');
      bata.play();
      break;

    case "k":
      let konga = new Audio('sounds/crash.mp3');
      konga.play();
      break;

    case "l":
      let string = new Audio('sounds/kick-bass.mp3');
      string.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
