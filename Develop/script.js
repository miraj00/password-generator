window.alert('Welcome to the Password Generator');

// Add event listener to generate button

var generateBtn=document.getElementById('generate')
generate.addEventListener("click", writePassword);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
    }

 var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var specialChars = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "+", ",", "-", ".", "/", ";", "<", "=", ">", "?", "@", "[", "^", "|", "~", "*"];
 var array = "";

console.log(lowerCases);
console.log(upperCases);
console.log(numbers);
console.log(specialChars);
console.log(array);


function generatePassword() {
    var passLength = window.prompt("please provide length of passowrd you want to keep (between 8 to 128 characters)");
      console.log(passLength);
      
 if (passLength > 7 && passLength < 129) {
    window.alert('Password Length Accepted : ' +passLength + ' characters Long'); 
   

        var verify2 = confirm("Do you want to include lowercase letter (e.g. a,b,c..) ?");
        if (verify2 === true) {
        lowerCode = lowerCases[Math.floor((Math.random() * 26))];
        console.log(lowerCode);
          }
        else {
         lowerCode = "null";
        }
         
  
        var verify3 = confirm("Do you want to include UPPERCASE letter (e.g. A,B,C.. ) ?");
        if (verify3 === true) {
        upperCode = upperCases[Math.floor((Math.random() * 26))];
        console.log(upperCode);
          } 
       else {
       upperCode = "null";
       }
  
        var verify4 = confirm("Do you want to include numerics (numbers 0-9)?");
        if (verify4 === true) {
        numericCode = numbers[Math.floor((Math.random() * 10))];
        console.log(numericCode);
            }
       else {
       numericCode = "null";
       }

        var verify5 = confirm("Do you want to include special characters (e.g. !, #, $ ....?");
        if (verify5 === true) {
        specialCode = specialChars[Math.floor((Math.random() * 25))];
       console.log(specialCode);
        }
       else {
        specialCode = "null";
       }
    }    

 else {
    window.alert("Please provide number between 8 to 128 in order to proceed further");
     }    

    var functionArray = [lowerCode, upperCode, numericCode, specialCode];
    console.log(functionArray);

    
       var r = functionArray.filter(function(i){ return i != "null" })
       console.log(r);
  
  password = r;     

alert("Click on Generate Password Now")

/*function generatePassword() {
var password = r.slice(0, passLength);
console.log(password);
}
*/

}