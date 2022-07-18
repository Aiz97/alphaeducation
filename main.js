$(document).ready(function(){
    $('.customer-stories').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        mobileFirst:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 390,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.nav-list');
const body = document.body;

burgerIcon.addEventListener('click', function(e){
    this.classList.toggle('open');
    burgerMenu.classList.toggle('open');
    body.classList.toggle('no-scroll');
})
burgerMenu.addEventListener('click', function(e){
    if (e.target.matches('.nav-link')) {
        burgerIcon.classList.remove('open');
        burgerMenu.classList.remove('open');
        body.classList.remove('no-scroll');
    }
})