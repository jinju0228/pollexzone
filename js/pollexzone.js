
$(document).ready(function(){
    $(".cen_img").addClass("ma_img");
    $(".mp").addClass('cen_active');
    var goMa = document.getElementById('go_ma')
    $(goMa).hover(function(){
        $(".cen_img").removeClass("se_img");
        $(".cen_img").removeClass("go_img");
        $(".cen_img").addClass("ma_img");
        $("#cen_seo").hide();
        $("#cen_gong").hide();
        $("#cen_ma").show();
        $(".mp").addClass('cen_active');
    })  
    var goGong = document.getElementById('go_gong')
    $(goGong).hover(function(){
        $(".cen_img").removeClass("ma_img");
        $(".cen_img").removeClass("se_img");
        $(".cen_img").addClass("go_img");
        $("#cen_ma").hide();
        $("#cen_seo").hide();      
        $("#cen_gong").show();
        $(".mp").removeClass('cen_active');
        $(".sp").removeClass('cen_active');
        $(".gp").addClass('cen_active');
    })
      var goSeo = document.getElementById('go_seo')
      $(goSeo).hover(function(){
          $(".cen_img").removeClass("ma_img");
          $(".cen_img").removeClass("go_img");
          $(".cen_img").addClass("se_img");
          $("#cen_ma").hide();
          $("#cen_gong").hide();
          $("#cen_seo").show();
          $(".mp").removeClass('cen_active');
          $(".gp").removeClass('cen_active');
          $(".sp").addClass('cen_active');
        });  


    $(".info_cont").hover(function(){
      $(this).addClass("inCont_active");
      }, function(){
      $(this).removeClass("inCont_active");
    });






    var isVisible = false;

$(window).on('scroll', function () {
    if (checkVisible($('#sec3')) && !isVisible) {
        $(document).ready(function () {
            $(".white_1, .white_4").animate({
                width: '0',
            }, 150);
        });

        $(document).ready(function () {
            $(".white_2, .white_3").animate({
                height: '0',
            }, 150);
        });
        isVisible = true;
    }
});

function checkVisible(elm, eval) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

})






$(document).ready(function(){
    $('.btn_nav>a').on('click', function(){
      $('.fullScreen_Menu').fadeIn();
    });
    $('.close_btn').on('click', function(){
      $('.fullScreen_Menu').hide(); 
    });  
  });