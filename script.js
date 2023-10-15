// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const numbers = "0123456789";
const specialChar = "!#$%&'()*+,-./:;<=>?@][[^_`{|}~";
var tempString = "";
var passLength = 55;    //
var password = function(length) {
    let result =' ';
    const passLength = characters.length; //change to tempstring
    for (let i = 0;i < length; i++) {
      result += tempString.charAt(Math.floor(Math.random() * passLength));
    }
    return result;
}
console.log(password(11));  //change to passLength

let passType = prompt("Select 1 to use letters only, 2 to use letters and numbers, 3 to use letters, numers, and special characters");
  if (passType == 1) {
    tempString = characters;
    console.log(password(111));
  }
  else if (passType == 2) {
    tempString = characters + numbers;
    console.log(password(111));
  }
  else if (passType == 3) {
    tempString = characters + numbers + specialChar;
    console.log(password(111));
  }
    else {
      console.log("ERROR ERROR ERROR")
  }
  
// var passwordText = document.querySelector("#password");

//  passwordText.value = password;



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
