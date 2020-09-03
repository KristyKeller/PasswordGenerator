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
var numberOfCharacters=parseInt(prompt("How many characters do you want your password to be?"));
    while(numberOfCharacters < 8 || numberOfCharacters > 128 || typeof(numberOfCharacters) != "number" || numberOfCharacters === NaN || numberOfCharacters === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters.");
        numberOfCharacters=parseInt(prompt("How many characters do you want the password to be?"));
    } 
// Need user to select correct criteria next
"Click OK to confirm including numeric characters"
"Click OK to confirm including special characters"
"Click OK to confirm including lowercase characters"
"Click OK to confirm including uppercase characters"


// Error check--using alerts, make use user options meet the criteria 

"Must select at least one character type"


// Generate a password 
//Use math random to generate
return password; 
}