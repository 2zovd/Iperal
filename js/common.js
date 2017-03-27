 
 $('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  dots: true
});

 $('.product-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  nextArrow: '<button class="slick-arrow slick-prev"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
  prevArrow: '<button class="slick-arrow slick-next"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
  responsive: [
    {
        breakpoint: 980,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        }
    }
]
});


document.getElementById('nav-drop_btn').onclick = function() {
	document.getElementById('nav-drop').classList.toggle('active-menu');
}