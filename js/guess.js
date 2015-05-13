randomNumber = Math.round((Math.random() * 10))%100 + 1;


var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
btn.addEventListener('click', function () {
  var guess = parseInt(document.querySelector('.int').value);
  if (guess < randomNumber){
    h1.textContent = 'Too Low';
  }
  else if  (guess > randomNumber) {
  h1.textContent = 'Too High';
  }
  else {
  h1.textContent = 'You Got It';
  }
});
