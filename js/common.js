 
 $('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true
});

document.getElementById('nav-drop_btn').onclick = function() {
	document.getElementById('nav-drop').classList.toggle('active-menu');
}