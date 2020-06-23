const bar = document.querySelector('.fa-bars');
const times = document.querySelector('.fa-times');
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

/*bar.addEventListener('click', function() {
    burger.classList.add('active');
    nav.style.left = '0px';
    bar.classList.add('hide');
    times.classList.remove('hide');
});

times.addEventListener('click', function() {
    burger.classList.remove('active');
    nav.style.left = '-350px';
    bar.classList.remove('hide');
    times.classList.add('hide');
})*/

burger.addEventListener('click', function() {
    nav.classList.toggle('active');
    burger.classList.toggle('active');

    if(burger.classList.contains('active')) {
        bar.classList.add('hide');
        times.classList.remove('hide');
    } else {
        bar.classList.remove('hide');
        times.classList.add('hide');
    };
});

