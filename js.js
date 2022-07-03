new Swiper('.swiper',{
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
})
let body = document.querySelector('body')
let burger = document.querySelector('.burger')
let burgerLine = document.querySelectorAll('.burger-line')
let navBar = document.querySelector('.links-block')
burger.addEventListener('click',function(){
    burgerLine[0].classList.toggle('burger-line-one')
    burgerLine[1].classList.toggle('burger-line-two')
    burgerLine[2].classList.toggle('burger-line-three')
    navBar.classList.toggle('link-active')
    burger.classList.toggle('burger-active')
    body.classList.toggle('block')
})
