const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const random = document.getElementById('random');

console.log(body);
console.log(color1);

const setGradient = function () {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ';';
}  

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

//exercises

//1. write code so that the colour inputs match the background generated on the first page load
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

//2. Display the initial CSS linear gradient property on page load
css.textContent = body.style.background + ';';

//3. BONUS: Add a random button which generates two random numbers for the colour inṕuts
const setRandomNumber = function () {
    let code = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
        color = color + code[Math.floor(Math.random() * 16)]; 
    }
    return color;
}

const randomBackground = function () {
    let random1 = setRandomNumber();
    let random2 = setRandomNumber(); 
    
    body.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";

    css.textContent = body.style.background + ';';    

    color1.value = random1;
    color2.value = random2;    
}

random.addEventListener('click', randomBackground);
