const pressed = [];
const secretCode = 'mr woolston will never find this';



const h1 = document.getElementsByTagName('h1')[0];
const text = h1.innerHTML;

h1.addEventListener('click', (e) => {
  if (h1.innerHTML === text) {
    h1.innerHTML = secretCode;
  } else {
    h1.innerHTML = text;
  }
});



window.addEventListener('keyup', (e) => { 
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1 , pressed.length - secretCode.length);
  console.log(pressed);
  if (pressed.join('').includes(secretCode)) {
    console.log('Received the secret code');
    cornify_add();
  }
});

console.log(pressed);
