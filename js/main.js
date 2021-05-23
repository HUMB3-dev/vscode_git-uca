document.addEventListener('DOMContentLoaded',()=>{
const elementosCarousel= document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel ,{
    duration:150,
    
    indicators:true,
   
} 
    
)
});
var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });