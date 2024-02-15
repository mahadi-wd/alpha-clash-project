
// hide element 
function hideElementById(elementid){
    const getElementById = document.getElementById(elementid);
    getElementById.classList.add('hidden');
    return getElementById;
}

// show element 
function showElementById(elementid){
    const showElementById = document.getElementById(elementid);
    showElementById.classList.remove('hidden');
    return showElementById;
}

// get or creat a random alphabet

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    const randomAlphabet = Math.random() *25;
    const index = Math.round(randomAlphabet);

    const alphabet = alphabets[index];
    return alphabet;
}

function setBackgroundById(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('bg-orange-400');
    return element;

}