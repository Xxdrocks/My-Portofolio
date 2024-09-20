const javascript = document.getElementById('javascript');
const php = document.getElementById('php');
const html = document.getElementById('html');
const css = document.getElementById('css');
const kotak = document.getElementById('kotak');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    
    javascript.style.transform = 'translate(0, -' + (value * 0.4) + 'px)';
    php.style.transform = 'translate(0, -' + (value * 0.4) + 'px)';
    html.style.transform = 'translate(0, -' + (value * 0.5) + 'px)';
    css.style.transform = 'translate(0, -' + (value * 0.5) + 'px)';
    kotak.style.transform = 'rotate(' + (value * 0.1) + 'deg)'; 
});
