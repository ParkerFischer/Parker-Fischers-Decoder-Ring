const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");



describe('Substitution() Cipher tests for fringe errors', () =>{ 
  it('does it maintain spaces?', () =>{
  const actualResult = substitution('a a','xoyqmcgrukswaflnthdjpzibev' )
  const expectedResult = 'x x'
  expect(actualResult).to.eql(expectedResult)})
  
  it('does it ignore capital letters?', () =>{
  const actualResult = substitution('A a','xoyqmcgrukswaflnthdjpzibev' )
  const expectedResult = 'x x'
  expect(actualResult).to.eql(expectedResult)})
  
  it('does it check if the alphabet input is 26 characters?', () =>{
  const actualResult = substitution('A a','xoyqmcgrukswaflnthdjpzibevh' )
  const expectedResult = false
  expect(actualResult).to.eql(expectedResult)})
  
  it('does it check if the alphabet input is 26 unique characters?', () =>{
  const actualResult = substitution('A a','xoyqmcgrukswaflnthdjpzibep' )
  const expectedResult = false
  expect(actualResult).to.eql(expectedResult)})
  
  it('does it check if the alphabet input is 26 unique characters?', () =>{
  const actualResult = substitution('A a','xoyqmcgrukswaflnthdjpzibep' )
  const expectedResult = false
  expect(actualResult).to.eql(expectedResult)})
})


describe('Substitution() Cipher tests for examples', () =>{ 
  it('does it encode "thinkful"?', () =>{
  const actualResult = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
  const expectedResult = 'jrufscpw'
  expect(actualResult).to.eql(expectedResult)})
  
  it('does it encode "You are an excellent spy"?', () =>{
  const actualResult = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
  const expectedResult = 'elp xhm xf mbymwwmfj dne'
  expect(actualResult).to.eql(expectedResult)})

  it('does it decode "jrufscpw"?', () =>{
  const actualResult = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
  const expectedResult = 'thinkful'
  expect(actualResult).to.eql(expectedResult)})
  
  it('does it encode "message"?', () =>{
  const actualResult = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
  const expectedResult = 'y&ii$r&'
  expect(actualResult).to.eql(expectedResult)})
  
  it('does it decode "y&ii$r&"?', () =>{
  const actualResult = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
  const expectedResult = 'message'
  expect(actualResult).to.eql(expectedResult)})
  })