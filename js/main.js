  // jQuery
  $('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();

        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 500);
    }
});
// collapse
$( document ).ready(function(){
$(".button-collapse").sideNav();
});

// caroussel
$(document).ready(function(){
    $('.carousel').carousel();
    setInterval(function() {
    $('.carousel').carousel('next');
  }, 2000); // every 2 seconds
  });


// paralax
$(document).ready(function(){
     $('.parallax').parallax();
   });

// scrollSpy
   $(document).ready(function(){
     $('.scrollspy').scrollSpy();
   });


    $(document).ready(function(){
      $('.modal').modal();

 });

    //  fadeIn,color
  $(document).ready(function(){
    $('.aboutMe').css('color','white');
    $('.aboutMe').fadeIn(5000,function(){

    });
   
   

   
    });
