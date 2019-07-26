import React, { Component } from 'react'
import './Boxes.css'
import Encrypt from './Encrypt'
import Result from './Result'

class Boxes extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      key: '',
      type: 'encrypt',
      result: ''
    }
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  }
  onKeyChange = event => {
    this.setState({ key: event.target.value })
  }

  clearInput = () => {
    this.setState({ input: '' })
    console.log('aa')
  }

  onButtonSubmit = () => {
    if (this.state.type === 'encrypt') {
      this.setState({ result: encrypt(this.state.key, this.state.input) })
    }
    if (this.state.type === 'decrypt') {
      this.setState({ result: decrypt(this.state.key, this.state.input) })
    }
  }

  render() {
    return (
      <div className="boxes">
        <Encrypt
          onInputChange={this.onInputChange}
          onKeyChange={this.onKeyChange}
          onButtonSubmit={this.onButtonSubmit}
          clearInput={this.clearInput}
          input={this.state.input}
        />
        <Result result={this.state.result} />
      </div>
    )
  }
}

// binary
const Binary = [
  [0, 0, 1, 0, 0, 0, 0, 1], //!
  [0, 0, 1, 0, 0, 0, 1, 0], //"
  [0, 0, 1, 0, 0, 0, 1, 1], //#
  [0, 0, 1, 0, 0, 1, 0, 0], //$
  [0, 0, 1, 0, 0, 1, 0, 1], //%
  [0, 0, 1, 0, 0, 1, 1, 0], //&
  [0, 0, 1, 0, 0, 1, 1, 1], //'
  [0, 0, 1, 0, 1, 0, 0, 0], //(
  [0, 0, 1, 0, 1, 0, 0, 1], //)
  [0, 0, 1, 0, 1, 0, 1, 0], //*
  [0, 0, 1, 0, 1, 0, 1, 1], //+
  [0, 0, 1, 0, 1, 1, 0, 0], //,
  [0, 0, 1, 0, 1, 1, 0, 1], //-
  [0, 0, 1, 0, 1, 1, 1, 0], //.
  [0, 0, 1, 0, 1, 1, 1, 1], // /
  [0, 0, 1, 1, 0, 0, 0, 0], //0
  [0, 0, 1, 1, 0, 0, 0, 1], //1
  [0, 0, 1, 1, 0, 0, 1, 0], //2
  [0, 0, 1, 1, 0, 0, 1, 1], //3
  [0, 0, 1, 1, 0, 1, 0, 0], //4
  [0, 0, 1, 1, 0, 1, 0, 1], //5
  [0, 0, 1, 1, 0, 1, 1, 0], //6
  [0, 0, 1, 1, 0, 1, 1, 1], //7
  [0, 0, 1, 1, 1, 0, 0, 0], //8
  [0, 0, 1, 1, 1, 0, 0, 1], //9
  [0, 0, 1, 1, 1, 0, 1, 0], //:
  [0, 0, 1, 1, 1, 0, 1, 1], //;
  [0, 0, 1, 1, 1, 1, 0, 0], //<
  [0, 0, 1, 1, 1, 1, 0, 1], //=
  [0, 0, 1, 1, 1, 1, 1, 0], //>
  [0, 0, 1, 1, 1, 1, 1, 1], //?
  [0, 1, 0, 0, 0, 0, 0, 0], //@
  [0, 1, 0, 0, 0, 0, 0, 1], //A
  [0, 1, 0, 0, 0, 0, 1, 0], //B
  [0, 1, 0, 0, 0, 0, 1, 1], //C
  [0, 1, 0, 0, 0, 1, 0, 0], //D
  [0, 1, 0, 0, 0, 1, 0, 1], //E
  [0, 1, 0, 0, 0, 1, 1, 0], //F
  [0, 1, 0, 0, 0, 1, 1, 1], //G
  [0, 1, 0, 0, 1, 0, 0, 0], //H
  [0, 1, 0, 0, 1, 0, 0, 1], //I
  [0, 1, 0, 0, 1, 0, 1, 0], //J
  [0, 1, 0, 0, 1, 0, 1, 1], //K
  [0, 1, 0, 0, 1, 1, 0, 0], //L
  [0, 1, 0, 0, 1, 1, 0, 1], //M
  [0, 1, 0, 0, 1, 1, 1, 0], //N
  [0, 1, 0, 0, 1, 1, 1, 1], //O
  [0, 1, 0, 1, 0, 0, 0, 0], //P
  [0, 1, 0, 1, 0, 0, 0, 1], //Q
  [0, 1, 0, 1, 0, 0, 1, 0], //R
  [0, 1, 0, 1, 0, 0, 1, 1], //S
  [0, 1, 0, 1, 0, 1, 0, 0], //T
  [0, 1, 0, 1, 0, 1, 0, 1], //U
  [0, 1, 0, 1, 0, 1, 1, 0], //V
  [0, 1, 0, 1, 0, 1, 1, 1], //W
  [0, 1, 0, 1, 1, 0, 0, 0], //X
  [0, 1, 0, 1, 1, 0, 0, 1], //Y
  [0, 1, 0, 1, 1, 0, 1, 0], //Z
  [0, 1, 0, 1, 1, 0, 1, 1], //[
  [0, 1, 0, 1, 1, 1, 0, 0], //\
  [0, 1, 0, 1, 1, 1, 0, 1], //]
  [0, 1, 0, 1, 1, 1, 1, 0], //^
  [0, 1, 0, 1, 1, 1, 1, 1], //_
  [0, 1, 1, 0, 0, 0, 0, 0], //`
  [0, 1, 1, 0, 0, 0, 0, 1], //a
  [0, 1, 1, 0, 0, 0, 1, 0], //b
  [0, 1, 1, 0, 0, 0, 1, 1], //c
  [0, 1, 1, 0, 0, 1, 0, 0], //d
  [0, 1, 1, 0, 0, 1, 0, 1], //e
  [0, 1, 1, 0, 0, 1, 1, 0], //f
  [0, 1, 1, 0, 0, 1, 1, 1], //g
  [0, 1, 1, 0, 1, 0, 0, 0], //h
  [0, 1, 1, 0, 1, 0, 0, 1], //i
  [0, 1, 1, 0, 1, 0, 1, 0], //j
  [0, 1, 1, 0, 1, 0, 1, 1], //k
  [0, 1, 1, 0, 1, 1, 0, 0], //l
  [0, 1, 1, 0, 1, 1, 0, 1], //m
  [0, 1, 1, 0, 1, 1, 1, 0], //n
  [0, 1, 1, 0, 1, 1, 1, 1], //o
  [0, 1, 1, 1, 0, 0, 0, 0], //p
  [0, 1, 1, 1, 0, 0, 0, 1], //q
  [0, 1, 1, 1, 0, 0, 1, 0], //r
  [0, 1, 1, 1, 0, 0, 1, 1], //s
  [0, 1, 1, 1, 0, 1, 0, 0], //t
  [0, 1, 1, 1, 0, 1, 0, 1], //u
  [0, 1, 1, 1, 0, 1, 1, 0], //v
  [0, 1, 1, 1, 0, 1, 1, 1], //w
  [0, 1, 1, 1, 1, 0, 0, 0], //x
  [0, 1, 1, 1, 1, 0, 0, 1], //y
  [0, 1, 1, 1, 1, 0, 1, 0], //z
  [0, 1, 1, 1, 1, 0, 1, 1], //{
  [0, 1, 1, 1, 1, 1, 0, 0], //|
  [0, 1, 1, 1, 1, 1, 0, 1], //}
  [0, 1, 1, 1, 1, 1, 1, 0], //~
  [0, 1, 1, 1, 1, 1, 1, 1], // [SPACE]
  [1, 0, 0, 0, 0, 0, 0, 1], // ë
  [1, 0, 0, 0, 0, 0, 1, 0], // ç
  [1, 0, 0, 0, 0, 0, 1, 1] // /n
]

// chars
const char = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
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
  'Z',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
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
  'z',
  '{',
  '|',
  '}',
  '~',
  ' ',
  'ë',
  'ç',
  '\n'
]

const encrypt = (key, text) => {
  // copy Binary table to a new one so we dont change the default values
  var BinaryToShuffle = Array.from(Binary)
  if (key !== '') sortTableSeedBased(BinaryToShuffle, key)
  var BitsMatrix = createBitsMatrix(text, BinaryToShuffle)
  var BitsArray = createBitsArray(text, BitsMatrix)
  var BitsText = BitsArray.join('')
  return BitsText
}

const createBitsMatrix = (word, arr) => {
  /* 
      Create a wordS array where we will save the word bits
      We loop through the char array to find a match for every char of the word .. word[i]
      When we find a match we add the Binary[j] at that index in the BitsMatrix array 
  */
  var BitsMatrix = []
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (word[i] === char[j]) {
        BitsMatrix.push(arr[j])
        break
      }
    }
  }
  return BitsMatrix
}

const createBitsArray = (text, BitsMatrix) => {
  /*
      It has two arguments, text to get the length of the text and BitsMatrix 
      This converts and Matrix into and array
  */
  var BitsArray = []
  for (let m = 0; m < text.length; m++) {
    for (let n = 0; n < 8; n++) {
      BitsArray.push(BitsMatrix[m][n])
    }
  }
  return BitsArray
}

// Sort the table based on the key
const sortTableSeedBased = (arr, seed) => {
  arr.sort(function() {
    seed = getNextValue(seed)
    let key = 0.5 - seed
    return key
  })
}

const getNextValue = seed => {
  seed = (seed * 9301 + 49297) % 2332
  return seed / 2332
}

// decrypt
const decrypt = (key, code) => {
  code = code.replace(/\s+/g, '')
  // creates a new array so we dont change the default one;
  var BinaryToShuffle1 = Array.from(Binary)

  if (key !== '') sortTableSeedBased(BinaryToShuffle1, key)
  var CharArray = BitsToChars(code, BinaryToShuffle1)
  var CharText = CharArray.join('')
  return CharText
}

const BitsToChars = (code, arr) => {
  // Declaring an array for later use
  let SevenBitArray = []
  // CharArray will keep the decoded characters
  let CharArray = []
  // loops through the code
  for (let a = 0; a < code.length; a++) {
    // if 8 bits are completed than do ...
    if (a % 8 === 0) {
      // Declare BitCounter That will count from 0 to 7
      let BitCounter = 0
      // j will start from a and will go to a+8 ..
      for (let j = a; j < a + 8; j++) {
        // adds bit from code to SevenBitArray and than increases the counter
        SevenBitArray[BitCounter] = code[j]
        BitCounter++
      }
      // after getting the array of bits we use the function EightBitsToChar to get the char of that group of bits
      // and than we add the char to a CharArray
      CharArray.push(EightBitsToChar(SevenBitArray, arr))
    }
  }
  return CharArray
}

// accepts an array of bits, and returns the character of that group of bits
const EightBitsToChar = (bitsArray, arr) => {
  for (let i = 0; i < arr.length; i++) {
    // k to count if 8 bits are the same if yes add to array
    var k = 0
    for (let j = 0; j < 8; j++) {
      if (bitsArray[j] === arr[i][j]) {
        k++
      }
    }
    // if 8 bits are the same as in the Matrix than return the char that belongs to that Index i
    if (k === 8) {
      return char[i]
    }
  }
}

export default Boxes
