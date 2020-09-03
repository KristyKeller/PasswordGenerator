// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create arrays to generate password options
function generatePassword() {
  var password = "";
  var numberOfCharacters;
  var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "_", "-"]

// Get user input through prompts and confirms 

// First prompt asks number of characters 
// If user doesn't select a number of characters between 8-158, they will be prompted with an error
// If user does select a number within the criteria, the are directed to confirm numeric characters
var numberOfCharacters = prompt("How many characters would you like your password to contain?");
if (numberOfCharacters > 8) {
alert("Click OK to confirm including numeric characters");
} else if (numberOfCharacters < 8) {
  alert("Password length must be at least 8 characters")
} if (numberOfCharacters < 128) {
  alert("Click OK to confirm including numeric characters");
} else if (numberOfCharacters > 128) {
  alert("Password length must be less than 129 characters")
}

"Click OK to confirm including numeric characters"
"Click OK to confirm including special characters"
"Click OK to confirm including lowercase characters"
"Click OK to confirm including uppercase characters"
// Get user to make their options meet the criteria

// Error check--using alerts, make use user options meet the criteria 

"Must select at least one character type"


// Generate a password 

return password;
}