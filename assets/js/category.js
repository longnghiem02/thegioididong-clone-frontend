// phần js slider


$(document).ready(function(){

    // phần slick

    $('.slider').slick({
        // dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,

        arrow: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll:1,
        // adaptiveHeight: true
      });


      //   slider deal sốc sản phẩn 
    $('.slick-deal').slick({
      // dots: true,
      infinite: true,
      arrow: true,
      pauseOnHover: true,
      slidesToShow: 5,
      slidesToScroll:5,
      // adaptiveHeight: true
      responsive: [
        {
          breakpoint: 1024,
          settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4
          }
        },
        {
          breakpoint: 740,
          settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
          }
        }
      ]
  });
  
});
  

 // phần cuộn thanh header poistion: fix
    //start
    window.onscroll = function() {myFunction()};
    //lấy ra thẻ chưa header  bằng id
    var header = document.getElementById('main-menu');
    var sticky = header.offsetTop;
    //gàn hiến sticky có position ofsetop
     function myFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
      //end
    






//   $(document).ready(function(){

//   });
