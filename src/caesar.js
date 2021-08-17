// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  function caesar(input, shift, encode = true) {
    let newShift = shift
    
    //Checks to make sure the shift amount is appropriate.
  if(newShift >= 26 || newShift <= -26 || newShift === 0 || !newShift){return false}
    
// checks if we need to encode or decode
 if(encode === false){
   newShift = -shift 
 }
       
//-----------------------------------\/arrays\/
//takes input and makes it all lower case and splits to an array.
const arrayInput = input.toLowerCase().split('')    

// accumulator array for the char codes
const arrayChar = [];
 
// accumulator array of shifted char codes
const arrayNewChar = []

//final shifted array with letters
const finalShiftedArray = []
 //---------------------------------/\arrays/\   
    
 //--------------------------------\/loops\/   
//loop to assign each array index its charcode
for(let currentChar of arrayInput)
    arrayChar.push(currentChar.charCodeAt())
    
//takes the accumulator of Char codes and shifts them
for(let currentNum of arrayChar){
if(currentNum > 96 && currentNum < 123){
 let newCurrentNum = currentNum + newShift;
  if (newCurrentNum < 97) {
      newCurrentNum = newCurrentNum + 26}
    else if (newCurrentNum > 122) 
    {newCurrentNum = newCurrentNum - 26}

      arrayNewChar.push(newCurrentNum) 
   } else { arrayNewChar.push(currentNum)} 
} 
   
// changes my shifted CharCodes to letters/symbols 
for(let currentNewCode of arrayNewChar){
finalShiftedArray.push(String.fromCharCode(currentNewCode))
}
   
//returns the joined final array of letters
return finalShiftedArray.join('') 
}


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
