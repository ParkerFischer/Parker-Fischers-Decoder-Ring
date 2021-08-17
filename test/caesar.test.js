const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");



describe("caesar() Cipher tests for fringe errors", () =>{ 

  it("is there a shift entered?", () =>{
    const actualResult = caesar("thinkful",)
    const expectedResult = false
    expect(actualResult).to.eql(expectedResult)})
  
  it("are the Params too large?", () =>{
    const actualResult = caesar("thinkful", 99)
    const expectedResult = false
    expect(actualResult).to.eql(expectedResult)})
  
  it("are the Params too small?", () =>{
    const actualResult = caesar("thinkful", -26)
    const expectedResult = false
    expect(actualResult).to.eql(expectedResult)})
  
  it("should return false when the shift value is not present", () => {
    const actual = caesar("thinkful");
    expect(actual).to.equal(false);})
  
  it("should return false when the shift value is equal to 0", () => {
    const actual = caesar("thinkful", 0);
    expect(actual).to.equal(false);})
  
  it("should return false when the shift value is less than -25", () => {
      const actual = caesar("thinkful", -26);
      expect(actual).to.equal(false);})
  
  it("should return false when the shift value is greater than 25", () => {
      const actual = caesar("thinkful", 99);
      expect(actual).to.equal(false);})
  
  it("should maintain spaces and non-alphabetic symbols and ignore capitalized letters", () => {
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar("This is a secret message!", 8)
      expect(actual).to.equal(expected);})
  
})

describe("caesar() Cipher example tests", () => {
  
  it("does it encode? should encode 'thinkful'", () =>{
    const actualResult = caesar("thinkful", 3)
    const expectedResult = 'wklqnixo'
    expect(actualResult).to.eql(expectedResult)})
  
  it("does it encode? should encode 'thinkful' witha. negative shift", () =>{
    const actualResult = caesar("thinkful", -3)
    const expectedResult = 'qefkhcri'
    expect(actualResult).to.eql(expectedResult)})
  
  it("does it decode? should decode 'wklqnixo'", () =>{
    const actualResult = caesar("wklqnixo", 3, false)
    const expectedResult = 'thinkful'
    expect(actualResult).to.eql(expectedResult)})
  
  it("does it encode? should encode 'This is a secret message!'", () =>{
    const actualResult = caesar("This is a secret message!", 8)
    const expectedResult = 'bpqa qa i amkzmb umaaiom!'
    expect(actualResult).to.eql(expectedResult)})
  
  it("does it decode? should decode 'BPQA qa I amkzmb umaaiom!'", () =>{
    const actualResult = caesar("BPQA qa I amkzmb umaaiom!", 8, false)
    const expectedResult = 'this is a secret message!'
    expect(actualResult).to.eql(expectedResult)})

})