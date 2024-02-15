

// hide elelment 
function hideElelment(elementId){
    const hideElelment = document.getElementById(elementId);
    hideElelment.classList.add('hidden');
    return hideElelment;
}

// show element 
function showElelment(elementId){
    const showElelment = document.getElementById(elementId);
    showElelment.classList.remove('hidden');
    return showElelment;

}

// random alphabet 
function randomAlphabets(){
    const randomAlphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = randomAlphabets.split('');

    const getRandomAlphabets = Math.random()*25;
    const index = Math.round(getRandomAlphabets);
    const alphabet = alphabets[index];
    return alphabet;
}
 
// set background color of alphabets
function setBackgroundById(elementId){
    const setBackgroundById = document.getElementById(elementId);
    setBackgroundById.classList.add('bg-lime-400');
    return setBackgroundById;
}

// remove background color of alphabets
function removeBackgroundById(elementId){
     const removeBackgroundById = document.getElementById(elementId);
     removeBackgroundById.classList.remove('bg-lime-400');
     return removeBackgroundById;
}

// get the tex value
function getElementTextById(event){
    const elementT = document.getElementById(event);
    const text = elementT.innerText ;
    return text;
}
// show the random alphabet in the screen 
function setElementById(event, value){
    const setElement = document.getElementById(event);
    setElement.innerText = value;
    return setElement;

}

// get expected alphabet 
function getExpectedAlphabetById(event){
    const theAlphabets = document.getElementById(event);
    const theAlphabetsText = theAlphabets.innerText;
    const expectedAlphabet = theAlphabetsText.toLowerCase();
    return expectedAlphabet;
}

// current score 
function getCurrentScoreById(event){
    const currentScoreElement = document.getElementById(event);
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    // const newScore = currentScore + 1;
    // currentScoreElement.innerText = newScore;
    return currentScore;
}

// current life 
function getCurrentLifeById(event){
    const currentLifeElement = document.getElementById(event);
    const currentLifeText = currentLifeElement.innerText;
    const newLife = parseInt(currentLifeText);
    const currentLife  = newLife - 1;
    return currentLife;
}