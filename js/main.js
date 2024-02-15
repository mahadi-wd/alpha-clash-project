

function handleKeyboardKeyupEvent(event){
    const playersPressed = event.key;
    const expectedAlphabet = getExpectedAlphabetById('display-alphabet');

    // stop game
    if(playersPressed === 'Escape'){
        gameOver()
    }
     
    console.log(expectedAlphabet, playersPressed);

    if( expectedAlphabet === playersPressed){
      removeBackgroundById(expectedAlphabet);
    //   set score on score board;
        const currentScoreElement= getCurrentScoreById('current-score');
        currentScore = currentScoreElement + 1;
        setElementById('current-score', currentScore);




      continueGame();
    }
    else{
        console.log('kamda korlen ki vai');
 
        const currentLifeElement = getCurrentLifeById('current-life');
        // const currentLife = currentLifeElement - 1;
        setElementById('current-life', currentLifeElement)
        
        
      if(currentLifeElement === 0 ){
       
        gameOver()
      }
      
 
 
    }
}
document.addEventListener('keyup', handleKeyboardKeyupEvent);




function continueGame(){
    const alphabet = randomAlphabets();
    setBackgroundById(alphabet);
     
    // its just show on the screen 
    setElementById('display-alphabet', alphabet);
   
    console.log( alphabet);
}


function enterGame(){
    hideElelment('home-screen');
    hideElelment('final-score')
    showElelment('playground-section');

    setElementById('current-life', 5)
    setElementById('current-score', 0)

    
    continueGame();

    
}

function gameOver(){

    hideElelment('playground-section')
    showElelment('final-score');

    // set final score on last page
    const lastScore = getCurrentScoreById('current-score');
    console.log(lastScore)
    setElementById('last-score' , lastScore);

    // clear button color in new game
    const currentElement = getElementTextById('display-alphabet');
    removeBackgroundById(currentElement);




   
}