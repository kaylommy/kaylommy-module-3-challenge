// Assignment code here
// variables for passowrd characters
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialcharacter = ['!', '@', '#', '$', '%', '&', '*', '+', '=', ";", ':', '?', ',', '.', '/', '<', '>', '{', '}', '[', ']', '(', ')', '~', '^'];
var digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function generatePassword() {
  //prompt user for password criteria
  var passwordLength = prompt("Please select a number between 8 and 128 for the length of your password.")
  //
  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("The number selected was not between 8 and 128. Please try again.")
    passwordLength = prompt("Please select a number between 8 and 128 for the length of your password");
  }
  //assign the variables to false to begin while loop
  var upper = false
  var lower = false
  var special = false
  var number = false
  while (upper === false && lower === false && special === false && number === false) {

    upper = confirm("Would you like your password to have uppercase letters?")
    lower = confirm("Would you like your password to have lowercase letters?")
    special = confirm("Would you like your password to have special characters?")
    number = confirm("Would you like your password to contain numbers?")
    // if all are false then it will loop to the options again
    if (upper === false && lower === false && special === false && number === false) {
      window.alert("You must select at least one option. Please try again.")
    }
  }
  // computerPick is left blank so we can have it assigned to a new value each if statement.
  var computerPick = ""
  for (i = 0; i < passwordLength; i++) {

    if (upper && computerPick.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * uppercase.length)
      computerPick = computerPick + uppercase[randomIndex]
    }

    if (lower && computerPick.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * lowercase.length)
      computerPick = computerPick + lowercase[randomIndex]
    }
    if (special && computerPick.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * specialcharacter.length)
      computerPick = computerPick + specialcharacter[randomIndex]
    }
    if (number && computerPick.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * digits.length)
      computerPick = computerPick + digits[randomIndex]
    }
  }
  return computerPick;

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
