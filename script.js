// Assignment Code
generateBtn = document.querySelector("#generate");
//generateBtn.addEventListener("click", password);


// Write password to the #password input
const charactersUp ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charactersLo ="abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "\\!#$%&'()*+,-./:;<=>?@][[^_`{|}~" + '"'
var tempArray = "";                                                                   //this will contain characters used in password generation
var randomPass = "";   
var passLength ="";
var passBox = document.querySelector("#password");

var writePassword = function(){
  passbox = "";
  do{
    passLength = prompt("select password length between 8 and 128 characters.");         //prompt will repeat until correct input
    } while(passLength < 8 || passLength > 128);
  
    var charLoConfirm = confirm("Would you like to use lower case letters?")
    if (charLoConfirm) {
      tempArray = charactersLo;
    }
  
    var charHiConfirm = confirm("Would you like to use upper case letters?")
    if (charHiConfirm) {
      tempArray = tempArray + charactersUp;
  
    }
    var numberConfirm = confirm("Would you like to use numbers?")
    if (numberConfirm) {
      tempArray = tempArray + numbers;
    }  
  
    var specialConfirm = confirm("Would you like to use special charcters?")
    if (specialConfirm) {
      tempArray = tempArray + specialChar;
    };

var password = function(length) {
  var tempArrayLength = tempArray.length;                                           //converts array length to a number
  for ( i = 0; i < length; i++) {
    randomPass += tempArray.charAt(Math.floor(Math.random() * tempArrayLength));    //charAt takes a random character from tempArray
  }
    return randomPass;
}
passBox.textContent = password(passLength)
}
// function clearbox(){
//   document.querySelector("#password").value = "";

// }
generateBtn.addEventListener("click", writePassword);