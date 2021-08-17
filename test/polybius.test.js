const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");// Write your tests here!


describe('Polybius() Cipher tests for fringe errors', () =>{ 
  it('When encoding, it translates the letter i to 42.', () =>{
  const actualResult = polybius('i')
  const expectedResult = '42'
  expect(actualResult).to.eql(expectedResult)})
  
  it('When encoding, it translates the letter j to 42.', () =>{
  const actualResult = polybius('j')
  const expectedResult = '42'
  expect(actualResult).to.eql(expectedResult)})
  
  it('When decoding, it translates 42 to (i/j).', () =>{
  const actualResult = polybius('42', false)
  const expectedResult = '(i/j)'
  expect(actualResult).to.eql(expectedResult)})
  
  it('It ignores capital letters.', () =>{
  const actualResult = polybius('A')
  const expectedResult = '11'
  expect(actualResult).to.eql(expectedResult)})
  
  it('It maintains spaces in the message after encoding', () =>{
  const actualResult = polybius('a a')
  const expectedResult = '11 11'
  expect(actualResult).to.eql(expectedResult)})
  
  it('It maintains spaces in the message after decoding', () =>{
  const actualResult = polybius('11 11', false)
  const expectedResult = 'a a'
  expect(actualResult).to.eql(expectedResult)})
  
  it('Should return false if input is not an even amount of numbers', () =>{
  const actualResult = polybius("44324233521254134", false);
  const expectedResult = false
  expect(actualResult).to.eql(expectedResult)})
})
  
describe('Polybius() Cipher example tests', () =>{ 
  it('Should encode "thinkful"', () =>{
  const actualResult = polybius('thinkful')
  const expectedResult = '4432423352125413'
  expect(actualResult).to.eql(expectedResult)})
  
  it('Should encode "Hello world"', () =>{
  const actualResult = polybius('Hello world')
  const expectedResult = '3251131343 2543241341'
  expect(actualResult).to.eql(expectedResult)})
  
  it('Should decode "3251131343 2543241341"', () =>{
  const actualResult = polybius("3251131343 2543241341", false)
  const expectedResult = 'hello world'
  expect(actualResult).to.eql(expectedResult)})
  
  it('Should decode "4432423352125413"', () =>{
  const actualResult = polybius("4432423352125413", false);
  const expectedResult = 'th(i/j)nkful'
  expect(actualResult).to.eql(expectedResult)})
})