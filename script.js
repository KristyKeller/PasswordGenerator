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
  var possibleChar = [];
  var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "_", "-"]

// Get user input through prompts and confirms 

// First prompt asks number of characters 
// Using while loop; If user doesn't select a number of characters between 8-158, they will be prompted with an error
// Using while loop; If user does select a number within the criteria, the are directed to confirm numeric characters
var numberOfCharacters=parseInt(prompt("How many characters do you want your password to be?"));
    if(numberOfCharacters < 8 || numberOfCharacters > 128 || typeof(numberOfCharacters) != "number" || numberOfCharacters === NaN || numberOfCharacters === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters.");
       return "";  // numberOfCharacters=parseInt(prompt("How many characters do you want your password to be?"));
    } 

// Need user to select correct criteria next
// Build array from scratch
// Use an empty array to represent user selections for character options
// Use concat with the blank array to generate user selections

var yesLower = confirm("Click OK to confirm including lowercase characters") 
if (yesLower) {
 possibleChar=possibleChar.concat(lowerCase);
 console.log(possibleChar)
}
var yesUpper = confirm("Click OK to confirm including uppercase characters") 
if (yesUpper) {
 possibleChar=possibleChar.concat(upperCase);
 console.log(possibleChar)
}
var yesNumber = confirm("Click OK to confirm including uppercase characters") 
if (yesNumber) {
 possibleChar=possibleChar.concat(numbers);
 console.log(possibleChar)
}
var yesSpecial = confirm("Click OK to confirm including uppercase characters") 
if (yesSpecial) {
 possibleChar=possibleChar.concat(specialChars);
 console.log(possibleChar)
}

// create for loop to generate a password using user's character selections

// i=0 loop (for) through how many char you wanted your password to be math.random to 

var i;
for (let i = 0; i < ""; i++) {
  console.log(i);
}
  password+= 

// end the loop
console.log(possibleChar)

return password; 
}