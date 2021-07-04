window.alert('Welcome to the Password Generator!  Click on Generate Password to Proceed further');

var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "”", "#", "$", "%", "&", "’", "(", ")", "+", ",", "-", ".", "/", ";", "<", "=", ">", "?", "@", "[", "^", "|", "~", "*"];
var array = [];

console.log(lowerCases);
console.log(upperCases);
console.log(numbers);
console.log(specialChars);
console.log(array);


// Add event listener to generate button -----------------------------
var generateBtn=document.getElementById('generate')
generate.addEventListener("click", writePassword);

//1st function to write password -------------------------------------
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
     }

//2nd function to generate password ----------------------------------
function generatePassword() {

  var passLength = parseInt(window.prompt("please provide length of passowrd you want to keep (between 8 to 128 characters)"));
  console.log(passLength);

//conditional statement if passLength is a number

  if (Number.isNaN(passLength)) {
  alert("You need to type numbers");
   return null;
      }

      if (passLength > 7 && passLength < 129) {
         window.alert('Password Length Accepted : ' +passLength + ' characters Long'); 
          }
     else {
         window.alert("Please provide number between 8 to 128 in order to proceed further");
        return null;  
        }  

// 
  var verify4 = confirm("Do you want to include numerics (numbers 0-9)?");
       if (verify4 === true) {
       array.push(numbers);
       console.log(array);
         }
        else {
        numericCode = "null";
        }
//
  var verify2 = confirm("Do you want to include lowercase letter (e.g. a,b,c..) ?");
        if (verify2 === true) {
         array.push(lowerCases);
         console.log(array);
           }
        else {
         lowerCode = "null";
        }
//           
  var verify3 = confirm("Do you want to include UPPERCASE letter (e.g. A,B,C.. ) ?");
        if (verify3 === true) {
        array.push(upperCases);
        console.log(array);
           } 
        else {
        upperCode = "null";
        }
//
  var verify5 = confirm("Do you want to include special characters (e.g. !, #, $ ....?");
        if (verify5 === true) {
        array.push(specialChars);
        var convert1 = console.log(array);
          }
       else {
       specialCode = "null";
       }
  // } 
     
  if (verify2 === false && verify3 === false && verify4 === false && verify5 === false) {
    window.alert("You need to choose atleast one option from lowecase, uppercase, numbers or characters to proceed further");
   return null; 
      }
    
 //this combines all array into one array ----------------------------------------
    var newArray = [];
    newArray = newArray.concat(array[0],array[1],array[2],array[3]);
    console.log(newArray);

  // this creates randomElement function to be used in for loop -----------------
    function randomElement (array) {
    return array[Math.floor(Math.random() * array.length)]
       }
    
 //this creates password of required length using random elements from newArray --------------   

     result = '';
     for (var i = 0; i < passLength; i++) {
         result += randomElement(newArray)
            }
     console.log(result)
     return (result);

}  
 
 


/* My Notes :   //---this filters undefined and presents only remaining value--------------------------

   var filtered = newArray.filter(function(x) {
    return x !== undefined;
         });
         console.log(filtered);
  */



// Example to support last part of joining array values without comma in between ----------------

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
//        expected output: "Fire,Air,Water"
//console.log(elements.join(''));
//        expected output: "FireAirWater"       <---------------------------
//console.log(elements.join('-'));
//         expected output: "Fire-Air-Water"



/* reference code to understand how random elements can be picked -----------
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!”#$%&’()+,-./;<=>?@[^|~*'.split(''),
result = '';
 for (var i = 0; i < passLength; i++) {
    result += randomElement(characters)
        }
console.log(result)

*/
