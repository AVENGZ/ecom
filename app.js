$(function () {
    new WOW().init();
})


///isotope

$(window).on('load', function (){
    $("#isotope-container").isotope({
        
      });
      // filter items on button click
      $("#isotope-filters").on('click', 'button', function() {
          //get filter value
          var filterValue = $(this).attr('data-filter');
          
          $("#isotope-container").isotope({
             filter: filterValue
        });
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active')
      });
      

})


///navigation  show and hide
$(function () {
    $(window).scroll(function(){
       if($(window).scrollTop() > 50 ) {
               $("nav").addClass("white-nav-top");
               $("#btn-back").fadeIn();

       }else{
            $("nav").removeClass("white-nav-top");
            $("#btn-back").fadeOut();
       }
      
    })
})

// ========click show hide methods====
 $("#cart").click(function(){
  
   $(".cart").show();
    
  });
// $(document).ready(function(){
//   $("#cart").click(function() {
//     $(".cart").show(2000);
//   });
// })


   $(".cls").click(function(){
    $(".cart").hide();
   });

  // $(document).ready(function(){
  //   $(".cls").click(function() {
  //     $(".cart").hide(2000);
  //   });
  // })

  
  // popup=====
  const popup = document.querySelector('.popup');
  const close = document.querySelector('.close')

  window.onload = function(){

    setTimeout(function() {
      popup.style.display = "block"
    }, 4000)
  }
  close.addEventListener('click', () => {
    popup.style.display = "none";
  })

  
  $(".search-close").click(function(){
    $(".search").hide();
   });

   


   $("#search").click(function(){
  
    $(".search").show();
     
   });