// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

function polybius(input, encode = true) {
     
//mast obj hold the encoder
  const encodingObj = {
    "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
    "f": 12, "g": 22, "h": 32, "i/j": 42, "k": 52,
    "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
    "q": 14, "r": 24, "s": 34, "t": 44, "u": 54,
    "v": 15, "w": 25, "x": 35, "y": 45, "z": 55}
   
//mast decoding obj
  const decodingObj = {
    11 : 'a', 12 : 'f', 13 : 'l', 14 : 'q', 15 : 'v',
    21 : 'b', 22 : 'g', 23 : 'm', 24 : 'r', 25 : 'w',
    31 : 'c', 32 : 'h', 33 : 'n', 34 : 's', 35 : 'x',
    41 : 'd', 42 : '(i/j)', 43 : 'o', 44 : 't', 45 : 'y',
    51 : 'e', 52 : 'k', 53 : 'p', 54 : 'u', 55 : 'z'}

//encode and decode code blocks split in a if statment checking the encode input
if(encode === true){
  
//formats input to lower case
  input = input.toLowerCase()
    
//string to gather output
  let encodedString = ''
    
//encoder code below
  for (let character of input) {
      if(character === "i" || character === "j") {
        encodedString = encodedString + encodingObj["i/j"];
      } else if(character === " ") {
          encodedString = encodedString + " ";
        } else {encodedString += encodingObj[character];}
  }

//returns encoded string
    return encodedString
  
//if it needs to decode it runs the below code
} else if(encode === false){
   
// check to see if the input is correct
   const inputLength = (input.split(' ').join('').length)
    if(inputLength % 2 === 1){return false}  
   
//format input
  let inputForm = input.split(' ')

//accum array
  const finalOutput = []

//decoding code
  for(let word of inputForm){
    let wordString = ''
        for(let i = 0; i < word.length; i+=2){
     
         if(word[i]+word[i+1]==='42'){wordString += '(i/j)'}
           else{wordString += decodingObj[word[i]+word[i+1]]}
         } 
   finalOutput.push(wordString)
    }
   
return finalOutput.join(' ')
}
}
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };