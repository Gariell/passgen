let inputResult = document.querySelector('.pg--input');
let inputLength = document.querySelector('.pg--length');
let pgCheckboxs = document.querySelectorAll('input[name=pg--param]')
let inputLengthValue = inputLength.value

let data = {
  "Numbers": "0123456789",
  "LowerCase": "abcdefghijklmnopqrstuvwxyz",
  "UpperCase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "Symbols": '@#$%?/._!',
}

function generatePassword() {
  let length = checkLenght(),
    charset = `${pgCheckboxs[0].checked?data.LowerCase:''}${pgCheckboxs[1].checked?data.UpperCase:''}${pgCheckboxs[2].checked?data.Numbers:''}${pgCheckboxs[3].checked?data.Symbols:''}`,
    retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i ) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function checkLenght() {
  if (inputLength.value >= 4) {
    return inputLength.value
  } else {
    return 3
  }
}

function generate() {
  inputResult.value = generatePassword()
}

function copyInputValue() {
  window.navigator.clipboard.writeText(inputResult.value)
}

function lengthEdit(p) {
  let i = inputLength.value
  if (p == "plus" && inputLength.value < 100) i++
  else if (inputLength.value > 3) i--
  else return
  inputLength.value = i
  generate()
}

generate()