const randomColorButton = document.querySelector('.RandomColor');
randomColorButton.addEventListener('click', function(event) {
  const body = document.querySelector('body');
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = randomColor;
});