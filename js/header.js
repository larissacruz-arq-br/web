const header = document.querySelector('.header');
const navbar = document.getElementById('navbar')

const headerIcon = document.querySelector('.header-icon img')
const headerHamburger = document.querySelector('.header-hamburger')

window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        header.classList.add('shrink');
        header.style.backgroundColor = 'var(--black)';

        headerIcon.style.transform = 'scale(0.8)';
        headerHamburger.style.scale = '0.8';
    } else {
        header.style.backgroundColor = 'transparent';
        header.classList.remove('shrink');

        headerIcon.style.transform = 'scale(1)';
        headerHamburger.style.scale = '1';
    };
});