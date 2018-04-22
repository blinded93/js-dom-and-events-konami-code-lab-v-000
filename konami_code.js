const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function init() {
  document.body.addEventListener('keydown', function listener(event) {
    const key = parseInt(event.detail);
    if (key === code[index]) {
      ++index;
    } else {
      index = 0;
    };
    if (index === code.length) {
      alert("You guessed it! Great job!")
      index = 0
    };
  })
}
