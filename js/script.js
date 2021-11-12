let inputResult = document.querySelector('.pg--input');
let inputLength = document.querySelector('.pg--length');
let pgCheckboxs = document.querySelectorAll('input[name=pg--param]')
inputLength.value = 12

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
  for (let i = 0, n = charset.length; i < length; ++i) {
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
  let el = document.createElement('textarea');el.value = inputResult.value;el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  el.select();document.execCommand('copy');
  document.body.removeChild(el);
}






generate()