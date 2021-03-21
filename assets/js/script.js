// Assignment code here

function generatePassword() {
  // character arrays
  var lowerCaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["-", "_", "/", "(", ")", "<", ">", "?", "!", "@", "$", "%", "^", "&", "*", "+", "="];

  // window popups and prompt
  var confirmLowerCase = window.confirm("Include Lowercase Characters?");
  var confirmUpperCase = window.confirm("Include Uppercase Characters?");
  var confirmNumeric = window.confirm("Include Numeric Characters?");
  var confirmSpecial = window.confirm("Include Special Characters?");
  var inputLength = parseInt(window.prompt("How long should your password be? (between 8 and 128 characters)"));

  // empty string to hold the password
  var globalPass = "";

  // empty array to combine the character arrays
  var characterList = [];

  // check if each prompt is confirmed or not and combine arrays if so
  if(confirmLowerCase) {
    characterList = characterList.concat(lowerCaseAlphabet);
    console.log(characterList);
  }
  if(confirmUpperCase) {
    characterList = characterList.concat(upperCaseAlphabet);
    console.log(characterList);
  }
  if(confirmNumeric) {
    characterList = characterList.concat(num);
    console.log(characterList);
  }
  if(confirmSpecial) {
    characterList = characterList.concat(special);
    console.log(characterList);
  }

  // pick a random character from final array an amount of times equal to the user's input
  for(var i = 0; i < inputLength; i++) {
     globalPass += characterList[Math.floor(Math.random() * characterList.length - 1)];
  }

  // return the final password
  return globalPass;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
