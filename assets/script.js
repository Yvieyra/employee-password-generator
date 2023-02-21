// variable choices for code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "*", "&", "+", "#", "%", "."]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var totalCharacters = (upperCase, specialChar, numbers, upperCase, specialChar, lowerCase);
var password = '';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// document.getElementById("generate").onclick = function () {
window.confirm("Let's get started on creating your secure password!");
var passwordLength = window.prompt("Enter the number of characters you want your password to be. A minimum of 8 characters and a maximum of 128 characters.");
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength);
  var passwordLetters = window.prompt("Great! Do you want your password to include lowercase and uppercase letters? yes or no.");
  console.log(passwordLetters);
  var passwordSymbols = window.prompt("Got it! Would you like your password to include special characters? yes or no.");
  console.log(passwordSymbols);
  var passwordNumbers = window.prompt("Would you like your password to include numbers? yes or no.");
  console.log(passwordNumbers);
} else {
  window.alert("Please try again, value must be no less than 8 and no more than 125.") // If user selects a number out less than 8 or higher than 125 there will be a window alert asking user to try again.
}

// The below code is what is needed to generate the password and write password to the text area on the webpage.
function generatePassword() {
  if (passwordLength === numbers.splice) {
    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * totalCharacters.length);
      var letter = lowerCase[randomNumber];

      if (totalCharacters > passwordLength) {
        password += letter;
      }
    }
  };
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
