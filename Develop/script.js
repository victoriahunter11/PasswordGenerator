//Variables
var Lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
 var Uppercase = [
   'A',
   'B',
   'C',
   'D',
   'E',
   'F',
   'G',
   'H',
   'I',
   'J',
   'K',
   'L',
   'M',
   'N',
   'O',
   'P',
   'Q',
   'R',
   'S',
   'T',
   'U',
   'V',
   'W',
   'X',
   'Y',
   'Z,'
 ];

 var numbers = [1,2,3,4,5,6,7,8,9];
 var characters = ['!','@','#','$','%','^','&','*','(',')'];
 var pw = [];

 //Function to get info about the criteria of the password
 function generatePassword() {
   confirmLowercase = confirm("Do you want lowercase letters?");
   confirmUppercase = confirm("Do you want uppercase letters?");
   confirmNumbers = confirm("Do you want numbers?");
   confirmCharacters = confirm("Do you want special characters?");

   if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmCharacters) {
     alert("You need atleast one!");
     generatePassword();
   }

   var passwordLength = prompt("How many characters do you want your password to consist of?", "Enter a number between 8 and 128.");

   if (!passwordLength) {
     alert("This needs a value");
   } else if (passwordLength < 8 || passwordLength > 128) {
   alert("You must choose between 8 and 128.");
  } 

 else if (confirmLowercase && confirmUppercase && confirmNumbers && confirmCharacters) {
   pw = character.concat(number, Lowercase, Uppercase);
 }
else if (confirmLowercase && confirmUppercase && confirmNumbers) {
  pw = character.concat(number, Lowercase, Uppercase)
}

}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
