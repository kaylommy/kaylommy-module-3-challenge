// Assignment code here

function generatePassword() {
  //prompt user for password criteria
  var passwordLength = prompt("Please select a number between 8 and 128 for the length of your password.")

  while (passwordLength < 8 || passwordLength > 128) {
      window.alert("The number selected was not between 8 and 128. Please try again.")
      passwordLength = prompt("Please select a number between 8 and 128 for the length of your password");
  }

  upper = confirm("Would you like your password to have uppercase letters?")
  lower = confirm("Would you like your password to have lowercase letters?")
  special = confirm("Would you like your password to have special characters?")
  number = confirm("Would you like your password to contain numbers?")

}

// variables for passowrd characters
var upper = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['!', '@', '#', '$', '%', '&', '*', '+', '=', ";", ':', '?', ',', '.', '/', '<', '>', '{', '}', '[', ']', '(', ')', '~', '^'];
var number = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']

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
