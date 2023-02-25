// variable choices for code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "*", "&", "+", "#", "%", "."]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var totalCharacters = [upperCase, specialChar, numbers, upperCase, specialChar, lowerCase];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// The below code is what is needed to generate the password and write password to the text area on the webpage.
function generatePassword() {

  var finalPassword = '';

  window.confirm("Let's get started on creating your secure password!");
  var passwordLength = window.prompt("Enter the number of characters you want your password to be. A minimum of 8 characters and a maximum of 128 characters.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);

    var passwordLowerCase = window.confirm("Great! Do you want your password to include lowercase letters? yes or no.");
    console.log(passwordLowerCase);

    var passwordUpperCase = window.confirm("Great! Do you want your password to include uppercase letters? yes or no.");
    console.log(passwordUpperCase);

    var passwordSymbols = window.confirm("Got it! Would you like your password to include special characters? yes or no.");
    console.log(passwordSymbols);

    var passwordNumbers = window.confirm("Would you like your password to include numbers? yes or no.");
    console.log(passwordNumbers);

    for (var i = 0; i < passwordLength; i++) {

      if (passwordLowerCase & finalPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * lowerCase.length);
        finalPassword += lowerCase[randomIndex]
      }

      if (passwordUpperCase & finalPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * upperCase.length);
        finalPassword += upperCase[randomIndex]
      }

      if (passwordSymbols & finalPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * specialChar.length);
        finalPassword += specialChar[randomIndex]
      }

      if (passwordNumbers & finalPassword.length < passwordLength) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        finalPassword += numbers[randomIndex]
      }
    };

  } else {

    window.alert("Please try again, value must be no less than 8 and no more than 125.") // If user selects a number out less than 8 or higher than 125 there will be a window alert asking user to try again.

  }

  return finalPassword;
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
