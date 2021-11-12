let inputResult = document.querySelector('.pg--input');
let inputLength = document.querySelector('.pg--length');
let pgCheckboxs = document.querySelectorAll('input[name=pg--param]')
inputLength.value = 12

let data = {
  "Numbers": "0123456789",
  "LowerCase": "abcdefghijklmnopqrstuvwxyz",
  "UpperCase": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
}

function generatePassword() {
  let length = checkLenght(),
      charset = `${pgCheckboxs[0].checked?data.LowerCase:''}${pgCheckboxs[1].checked?data.UpperCase:''}${pgCheckboxs[2].checked?data.Numbers:''}`,
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
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

generate()