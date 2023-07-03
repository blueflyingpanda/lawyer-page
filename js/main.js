const typingDelay = 50;
const secretText = 'Приглашаю целоваться ♥';

let footerContent = null;
let charIndex = 0;

$( document ).ready(() =>
  {
    footerContent = document.getElementsByTagName("h3")[0];
  })

function type() {
  if (charIndex < secretText.length) {
    footerContent.innerHTML += secretText.charAt(charIndex)
    charIndex++;
    setTimeout(type, typingDelay);
  }
}

function easterEgg() {
  footerContent.innerHTML = "";
  charIndex = 0;
  setTimeout(type, typingDelay);
}