// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign letters and numbers to variable
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYX";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";
var userChoice = [ "OK", "CANCEL"];


// Create prompt functions 
function generatePassword() {

  var promptLength = parseInt(prompt("Password must be between 8 and 128 characters"));
  if (promptLength < 8 || promptLength > 128) {
    return "Please enter valid length";
  } else if(promptLength > 7 && promptLength < 129) {

    // Creating function to select choice
    var prompt2 = confirm("Would you like to include uppercase letters? Y or N");
    var prompt3 = confirm("would you like to include special characters as well?");
    var prompt4 = confirm("would you like to include lowercase characters as well?");
    var prompt5 = confirm("Would you like to also include numbers?");
    if (!prompt2 && !prompt3 && !prompt4 && !prompt5) {
      return "Please make a selection";
    } else {
      var validEntry = []
      if (prompt2) {
        validEntry += upperCase;
      }
      if (prompt3) {
        validEntry += specialCharacters;
      }
      if (prompt4) {
        validEntry += lowerCase;
      }
      if (prompt5) {
        validEntry += numbers;
      }
      console.log(validEntry);
      var password = "";
      for (var i = 0; i < promptLength; i++) {
        var index = Math.floor(Math.random() * validEntry.length)
        console.log(index, validEntry[index]);
        password += validEntry[index]
      }
      console.log(password);
      return password;
    }






  }else{
    return "Invalid entry";
  }
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//passwordCriteria();