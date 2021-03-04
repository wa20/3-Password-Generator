

//selectors - display

const resultEl = document.getElementById("result");
const copyEl = document.getElementById("copy");

//selectors - password options

const lengthEl = document.getElementById("length");

const symbolEl = document.getElementById("symbols");
const numberEl = document.getElementById("numbers");
const lowerCaseEl = document.getElementById("lowerCase");
const upperCaseEl = document.getElementById("upperCase");
const specialCharacterEl = document.getElementById("specialCharachter");

//selectors - generate button

const generateEl = document.getElementById("generate");

//length selector





//global scopes

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVW";
const symbols = "§!@£#$%^&*()-+><?"


//funcitons

function includeSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
    
}


function includeNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
    
}


function includeLowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}


function includeUpperCase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];

}

alert(includeNumbers());


// generate password function




}



generateEl.addEventListener('click', generate)



//pseudo code

// 1 - create an array of options for the password

// 2 - create selectors

// 3 - 


// 4 - create an if function that looks to see what selectors are chosen.

// when you press the generate button this shouold trigger a main function with loads of mini functions inside it

// first look at the length of the password choice. this should affect the i < x option for the loop

// then, check if 'symbols' is checked, if it is checked select a 'symbol' at random then move on to next option. if no selection made then just move to next option
// then, check if 'numbers' is checked, if it is checked select a 'numbers' at random then move on to next option. if no selection made then just move to next option
// then, check if 'lowerCase' is checked, if it is checked select a 'lowerCase' at random then move on to next option. if no selection made then just move to next option
// then, check if 'upperCase' is checked, if it is checked select a 'upperCase' at random then move on to next option. if no selection made then just move to next option
// then, check if 'Special Charecter' is checked, if it is checked select a 'special charachter' at random then move on to next option. if no selection made then just move to next option
// repeat the procecess again selcting at random (creating a concat option for all the choices) untill lenght is fulfilled.

// 
