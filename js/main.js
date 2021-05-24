document.addEventListener('DOMContentLoaded',()=>{
const elementosCarousel= document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel ,{
    duration:150,
    
indicators:true,
   
} 
    
)
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, );
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems,);
  });

  // Or with jQuery

  $('.dropdown-trigger').dropdown();