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
var char = [
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

// addRow('char-binary', Binary)

var convertBtn = document.getElementById('chartobinary')
convertBtn.addEventListener('click', function() {
  // get the encrypt key of the table
  //   var keyencrypt = document.getElementById('keyencrypt').value
  // get the word
  //   var word = document.getElementById('word').value

  getWord(keyencrypt, word)
})

function getWord(keyencrypt, word) {
  // copy Binary table to a new one so we dont change the default values
  BinaryToShuffle = Array.from(Binary)
  // console.log(keyencrypt);
  if (keyencrypt != '') {
    // sorts the table based on the key
    sortTableSeedBased(BinaryToShuffle, keyencrypt)
  }

  //   addRow('char-binary', BinaryToShuffle)

  BitsMatrix = createBitsMatrix(word, BinaryToShuffle)

  BitsArray = createBitsArray(word, BitsMatrix)

  BitsText = BitsArray.join('')

  showText('coded', BitsText)

  document.getElementById('copy-btn').classList.remove('invisible')
  document.getElementById('share-btn').classList.remove('invisible')
}

/* Functions for creating and showing the BitsArray*/

function createBitsMatrix(word, arr) {
  /* 
    Create a wordS array where we will save the word bits
    We loop through the char array to find a match for every char of the word .. word[i]
    When we find a match we add the Binary[j] at that index in the BitsMatrix array 
    */

  var BitsMatrix = []
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (word[i] == char[j]) {
        BitsMatrix.push(arr[j])
        break
      }
    }
  }
  return BitsMatrix
}

function createBitsArray(word, BitsMatrix) {
  /*
    It has two arguments, word to get the length of the word and BitsMatrix 
    This converts and Matrix into and array
    */
  var BitsArray = []
  var wLength = word.length
  for (let m = 0; m < wLength; m++) {
    for (let n = 0; n < 8; n++) {
      BitsArray.push(BitsMatrix[m][n])
    }
  }
  return BitsArray
}

function showText(id, text) {
  // a function that accepts an id and text and
  var id = String(id)
  document.getElementById(id).innerHTML = text
}

/* Converting Bits to characters */

var decodeBtn = document.getElementById('binarytochar')

decodeBtn.addEventListener('click', function() {
  // get the encrypt key of the table
  keydecrypt = document.getElementById('keydecrypt').value
  // get the code from input form
  code = document.getElementById('code').value
  code = code.replace(/\s+/g, '')
  // decrypts the bits based on the key
  turnBack(keydecrypt, code)
})

function turnBack(keydecrypt, code) {
  // creates a new array so we dont change the default one;
  BinaryToShuffle1 = Array.from(Binary)

  if (keydecrypt != '') {
    // sorts the table based on the key
    sortTableSeedBased(BinaryToShuffle1, keydecrypt)
  }

  addRow('char-binary', BinaryToShuffle1)

  CharArray = BitsToChars(code, BinaryToShuffle1)
  CharText = CharArray.join('')
  showText('decoded', CharText)
}

function BitsToChars(code, arr) {
  // Declaring an array for later use
  let SevenBitArray = []
  // CharArray will keep the decoded characters
  let CharArray = []

  // loops through the code
  var codeLength = code.length
  for (let a = 0; a < codeLength; a++) {
    // if 8 bits are completed than do ...
    if (a % 8 == 0) {
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
function EightBitsToChar(bitsArray, arr) {
  var arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    // k to count if 8 bits are the same if yes add to array
    let k = 0
    for (let j = 0; j < 8; j++) {
      if (bitsArray[j] == arr[i][j]) {
        k++
      }
    }
    // if 8 bits are the same as in the Matrix than return the char that belongs to that Index i
    if (k == 8) {
      return char[i]
      break
    }
  }
}

// function that shows the table in html
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
function addRow(tableID, arr) {
  // firstly deletes all table rows except the header
  var Parent = document.getElementById(tableID)
  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild)
  }

  // Get a reference to the table
  let tableRef = document.getElementById(tableID)

  var arrLength = arr.length
  for (i = 0; i < arrLength; i++) {
    let newRow = tableRef.insertRow(-1)
    // Insert a cell in the row at index 0
    let FirstCell = newRow.insertCell(0)
    let SecondCell = newRow.insertCell(1)
    let CharValue = document.createTextNode(char[i])
    let BinaryValue = document.createTextNode(arr[i].join(''))
    FirstCell.appendChild(CharValue)
    SecondCell.appendChild(BinaryValue)
  }
}

// Call addRow() with the table's ID
// addRow("char-binary");

// Sort the table based on the key
function sortTableSeedBased(arr, seed) {
  arr.sort(function() {
    seed = getNextValue(seed)
    key = 0.5 - seed
    //console.log(key);
    return key
  })
}

function getNextValue(seed) {
  seed = (seed * 9301 + 49297) % 2332
  return seed / 2332
}

// a function that captures the url
function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  var varsLength = vars.length
  for (var i = 0; i < varsLength; i++) {
    var pair = vars[i].split('=')
    if (pair[0] == variable) {
      return pair[1]
    }
  }
  return false
}

// copy to clipboard
function copyToClipboard(id, type) {
  let str = document.getElementById(id).innerHTML
  const el = document.createElement('textarea') // Create a <textarea> element

  if (type === 'text') {
    el.value = str // Set its value to the string that you want copied
  } else if (type === 'link') {
    el.value = 'https://eneajaho.me/encrypt/?code=' + str
  }

  el.setAttribute('readonly', '') // Make it readonly to be tamper-proof
  el.style.position = 'absolute'
  el.style.left = '-9999px' // Move outside the screen to make it invisible
  document.body.appendChild(el) // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0 // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0) // Store selection if found
      : false // Mark as false to know no selection existed before
  el.select() // Select the <textarea> content
  document.execCommand('copy') // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el) // Remove the <textarea> element
  if (selected) {
    // If a selection existed before copying
    document.getSelection().removeAllRanges() // Unselect everything on the HTML document
    document.getSelection().addRange(selected) // Restore the original selection
  }
}

// if user inserts the word and key from url
if (getQueryVariable('word') != '') {
  if (getQueryVariable('key') != '') {
    getWord(getQueryVariable('key'), decodeURI(getQueryVariable('word')))
  } else if (getQueryVariable('key') == '') {
    let askKey = prompt('Please enter the key:')
    getWord(askKey, decodeURI(getQueryVariable('word')))
  }
}

// if user inserts the code and key from url
if (getQueryVariable('code') != '') {
  if (getQueryVariable('key') != '') {
    turnBack(getQueryVariable('key'), getQueryVariable('code'))
  } else if (getQueryVariable('key') == '') {
    let askKey = prompt('Please enter the key:')
    turnBack(askKey, decodeURI(getQueryVariable('code')))
  }
}

// PWA
window.onload = () => {
  'use strict'

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
  }
}
