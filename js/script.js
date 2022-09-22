const bar = document.getElementById('bar');
const closeIcon = document.getElementById('close');
const nav = document.querySelector('ul#navbar');

if(bar) {
   bar.addEventListener('click', function () {
    nav.classList.add('active');
   })
}

if(closeIcon) {
    closeIcon.addEventListener('click', function () {
        nav.classList.remove('active');
    })
}

