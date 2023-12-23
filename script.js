// Assignment Code
generateBtn = document.querySelector("#generate");

const charactersUp ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charactersLo ="abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChar = "\\!#$%&'()*+,-./:;<=>?@][[^_`{|}~" + '"'



let writePassword = function(){
  let tempArray = "";                                                                   
  let passLength ="";
  let passBox = document.querySelector("#password");
  // character number prompt will repeat until it receives correct input
  do{
    passLength = prompt("select password length between 8 and 128 characters.");         
    } while(passLength < 8 || passLength > 128);

  // charcter prompts will concatenate strings to tempArray
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
generateBtn.addEventListener("click", writePassword);