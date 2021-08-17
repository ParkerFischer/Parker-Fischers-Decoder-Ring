// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
// first error checks
if(!alphabet || alphabet.length != 26){return false}
   
for(let currentLetter of alphabet){
  let filteredArray = alphabet.split('').filter(letter => letter === currentLetter)
 if(filteredArray.length > 1){return false} 
}
    
 
//correct Alph array
    const alphaArr = 
    ['a','b','c','d','e',
    'f','g','h','i','j',
    'k','l','m','n','o',
    'p','q','r','s','t',
    'u','v','w','x','y','z']

//array that will hold the encoder/decoder key alphabet
    const newAlphaArray = alphabet.split('')

//encode and decode code blocks below split by a if statement.
    //formats input into an array
    if(encode === true){
        input = input.toLowerCase().split('')
    
    //accum array to return
    const finalAccumArray = []
      
      for(let currentWord of input){
        if(currentWord === ' '){
          finalAccumArray.push(currentWord)
        } else {
            for(let i = 0; i < alphaArr.length; i++ ){
            if(currentWord === alphaArr[i]){
              finalAccumArray.push(newAlphaArray[i])
              }
            }
          }
        
      }
     
return finalAccumArray.join('')

  } else if (encode === false){
      input = input.toLowerCase().split('')
    
    //accum array to return
    const finalAccumArray = []
      
      
      for(let currentWord of input){
        if(currentWord === ' '){
          finalAccumArray.push(currentWord)
        } else {
            for(let i = 0; i < newAlphaArray.length; i++ ){
            if(currentWord === newAlphaArray[i]){
              finalAccumArray.push(alphaArr[i])
              }
            }
          }
        
      }
     
   return finalAccumArray.join('')     
  }  
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
