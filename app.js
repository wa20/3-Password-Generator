const resultEl = document.getElementById("result");
let copyEl = document.getElementById("copy");

let generateEl = document.getElementById("generate");

function copyButton() {
  resultEl.select();
  resultEl.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied password: " + resultEl.value);
}




copyEl.addEventListener("click", copyButton);

function generatePassword() {

  const lengthEl = document.getElementById("length").value;
  const symbolEl = document.getElementById("symbols").checked;
  const numberEl = document.getElementById("numbers").checked;
  const lowerCaseEl = document.getElementById("lowerCase").checked;
  const upperCaseEl = document.getElementById("upperCase").checked;
  const specialCharacterEl = document.getElementById("specialCharachter");

  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVW";
  const symbols = "§!@£#$%^&*()_-+><?";

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

  console.log(symbolEl)
  console.log(lengthEl)
  
}


generateEl.addEventListener("click", generatePassword);














// alert(includeNumbers());

// console.log(includeSymbols());
// console.log(includeNumbers());
// console.log(includeUpperCase());
// console.log(includeLowerCase());

// generate password function

//pseudo code

// 1 - create an array of options for the password

// 2 - create selectors

// 3 -  create a string that picks a character at random

// 4 - create an if function that looks to see what selectors are chosen.

// when you press the generate button this should trigger a main function with loads of mini functions inside it

// first look at the length of the password choice. this should affect the i < x option for the loop

// then, check if 'symbols' is checked, if it is checked select a 'symbol' at random then move on to next option. if no selection made then just move to next option
// then, check if 'numbers' is checked, if it is checked select a 'numbers' at random then move on to next option. if no selection made then just move to next option
// then, check if 'lowerCase' is checked, if it is checked select a 'lowerCase' at random then move on to next option. if no selection made then just move to next option
// then, check if 'upperCase' is checked, if it is checked select a 'upperCase' at random then move on to next option. if no selection made then just move to next option
// then, check if 'Special Charecter' is checked, if it is checked select a 'special charachter' at random then move on to next option. if no selection made then just move to next option
// repeat the procecess again selcting at random (creating a concat option for all the choices) untill lenght is fulfilled.
