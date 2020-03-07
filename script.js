// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordTextEl = document.querySelector("password")

// Write password to the #password input
function writePassword(password, passwordTextEl) {
  var password = generatepassword(password)
  var passwordTextEl = document.querySelector("#password");
if( password > 8 char)
  passwordText.value = password;
  

} writePassword() 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
