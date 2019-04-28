const sliders = document.querySelectorAll('.sliders');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
setNext = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current')
    } else {
        sliders[0].classList.add('current')
    }

}
setPrev = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current')
    } else {
        sliders[sliders.length - 1].classList.add('current')
    }

}

rightArrow.addEventListener('click', () => {
    setNext();
})
leftArrow.addEventListener('click', () => {
    setPrev();
})


setInterval(() => {
    setNext();
}, 15000);