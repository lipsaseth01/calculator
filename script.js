const btn = document.getElementById('btn');
const balloon = document.getElementById('balloon');
const burst = document.createElement('div');
burst.id = 'burst';
burst.innerText = 'Hello';

btn.addEventListener('click', () => {
  balloon.style.display = 'none';
  balloon.parentNode.insertBefore(burst, balloon);
  setTimeout(() => {
    burst.style.display = 'none';
    balloon.style.display = 'block';
  }, 1000);
});
