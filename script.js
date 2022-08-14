// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign letters and numbers to variable (Password criteria)
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYX";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";
var userChoice = ["OK", "CANCEL"];


// Create password function 
function generatePassword() {

  // Creating condition for promptLength prompt box (length of password)
  var passwordLength = prompt("Password must be between 8 and 128 characters. Please make a valid entry: ");
  if (passwordLength < 8 || passwordLength > 128) {
    return "Please enter valid password character length!";
  } else if (passwordLength > 7 && passwordLength < 129) {

    // Creating confirm prompts and conditions
    var prompt2 = confirm("Would you like to include uppercase letters?");
    var prompt3 = confirm("would you like to include lowercase letters?");
    var prompt4 = confirm("would you like to include special characters?");
    var prompt5 = confirm("Would you like to include numbers?");

    // Creating logic conditions for inclusions and exclusions of character options
    if (!prompt2 && !prompt3 && !prompt4 && !prompt5) {
      return "That is not a valid option! User must choose from at least one of the fields. Please try again.";
    } else {

      // Concatonating valid entries from users' choice for each prompt to randomly generated password
      var validEntry = [];
      if (prompt2) {
        validEntry += upperCase;
      }
      if (prompt3) {
        validEntry += lowerCase;
      }
      if (prompt4) {
        validEntry += specialCharacters;
      }
      if (prompt5) {
        validEntry += numbers;
      }
      // Logging new concatonated validEntry array to the console
      console.log(validEntry);

      // Creating empty string for password variable; making for() loop, using Math.floor and Math.random for generating random character selections from each "string"
      var password = "";
      for (var i = 0; i < passwordLength; i++) {
        var index = Math.floor(Math.random() * validEntry.length)
        console.log(index, validEntry[index]);
        password += validEntry[index];
      }
      // Logging password and returning it to the screen.
      console.log(password);
      return password;
    }






  } else {
    return "Invalid entry! Your input does not match the needed criteria.";
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
