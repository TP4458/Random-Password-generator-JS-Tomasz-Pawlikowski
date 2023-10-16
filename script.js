// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789";
const specialChar = "\\!#$%&'()*+,-./:;<=>?@][[^_`{|}~" + '"'
var tempArray = "";      //this will concatenate ther strings to use in the IF
var passLength = 128;    //prompt will be here
var randomPass = "";

var password = function(length) {
    var tempArrayLength = tempArray.length;                                           //converts array length to a number
    for ( i = 0; i < length; i++) {
      randomPass += tempArray.charAt(Math.floor(Math.random() * tempArrayLength));    //charAt takes a random character from tempArray
    }
   // console.log(passLength);
    console.log(tempArray.length);
    console.log(randomPass.length)
    return randomPass;

}
console.log(password(234));

  //change to passLength

let passType = prompt("Select 1 to use letters only, 2 to use letters and numbers, 3 to use letters, numers, and special characters");
  if (passType == 1) {
    tempArray = characters;
    console.log(password(passLength));
    
  }
    else if (passType == 2) {
    tempArray = characters + numbers;
    console.log(password(passLength));
  }
    else if (passType == 3) {
    tempArray = characters + numbers + specialChar;
    console.log(password(passLength));
  }
    else {
      console.log("ERROR ERROR ERROR")
      alert("++?????++ Out of Cheese Error. Redo From Start.")
  }
  
// var passwordText = document.querySelector("#password");

//  passwordText.value = password;



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
