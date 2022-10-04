const mobileBtn = document.getElementById('mobile');
const headerNav = document.querySelector('.header__nav');
const mobileMenu = document.querySelector('.mobile--menu');

const close = document.createElement('p');

mobileBtn.addEventListener('click', function (e) {
  close.textContent = 'X';
  close.id = 'close';
  // console.log(close);
  removeOpen(close);
  mobileMenu.appendChild(close);
  if (e.target.id === 'mobile') headerNav.classList.add('open');
  // console.log(close);
});

function removeOpen(elementClose) {
  elementClose.addEventListener('click', function () {
    headerNav.classList.remove('open');
  });
}

console.log('first');
