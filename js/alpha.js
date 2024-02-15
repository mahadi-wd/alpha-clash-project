
function continueGame(){
   const alphabet = getRandomAlphabet();
   console.log(alphabet);

   const displayText = document.getElementById('display-alphabet');
   displayText.innerText = alphabet;
  console.log(displayText);

   setBackgroundById(alphabet);
   // // console.log(alphabet)

  

}

function play(){
  
  hideElementById('home-screen');
  showElementById('playground-section');
  continueGame();

  

   // show playground screen 
   // const playgroundScreen = document.getElementById('playground-section')
   // playgroundScreen.classList.remove('hidden')
}