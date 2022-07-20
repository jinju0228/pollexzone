

var animation = function () {
    var items, winH;
   
    var initModule = function () {
      items = document.querySelectorAll(".aniBox");
      winH = window.innerHeight;
      _addEventHandlers();
    }
   
    var _addEventHandlers = function () {
      window.addEventListener("scroll", _checkPosition );
      window.addEventListener("load", _checkPosition);
      window.addEventListener("resize", initModule);
    };
   
    var _checkPosition = function () {
      for (var i = 0; i < items.length; i++) {
        var posFromTop = items[i].getBoundingClientRect().top;
        if (winH > posFromTop) {
          items[i].classList.add("aniBox_active");
        }
      }
    }
    return {
      init: initModule
    }
  } 
  animation().init();


var animation2 = function () {
  var items, winH;
  var initModule = function () {
    items = document.querySelectorAll("#white_5");
    winH = window.innerHeight;
    _addEventHandlers();
  }
  var _addEventHandlers = function () {
    window.addEventListener("scroll", _checkPosition);
    window.addEventListener("load", _checkPosition);
    window.addEventListener("resize", initModule);
  };
 var _checkPosition = function flip(){
   for(let i = 0; i < items.length; i++){
     var cultureTop = items[i].getBoundingClientRect().top;
     if (winH > cultureTop) {
      items[i].classList.add('white_active')
    }
  }
     }

 return {
   init2: initModule
 }
}
animation2().init2();



var animation3 = function () {
  var items, winH;
  var initModule = function () {
    items = document.querySelectorAll(".cir_img");
    winH = window.innerHeight;
    _addEventHandlers();
  }
  var _addEventHandlers = function () {
    window.addEventListener("scroll", _checkPosition);
    window.addEventListener("load", _checkPosition);
    window.addEventListener("resize", initModule);
  };
 var _checkPosition = function flip(){
   for(let i = 0; i < items.length; i++){
     var cultureTop = items[i].getBoundingClientRect().top;
     if (winH > cultureTop) {
      items[i].classList.add('cir_active')
    }
  }
     }

 return {
   init3: initModule
 }
}
animation3().init3();



// $('plzone_span').hover(function(){
//   $(this).style.display = "block"
// });


var animation4 = function () {
  var items, winH;
  var initModule = function () {
    items = document.querySelectorAll(".plzone_span");
    winH = window.innerHeight;
    _addEventHandlers();
  }
  var _addEventHandlers = function () {
    window.addEventListener("scroll", _checkPosition);
    window.addEventListener("load", _checkPosition);
    window.addEventListener("resize", initModule);
  };
 var _checkPosition = function flip(){
   for(let i = 0; i < items.length; i++){
     var cultureTop = items[i].getBoundingClientRect().top;
     if (winH > cultureTop) {
      items[i].classList.add('gogo')
    }
  }
     }

 return {
   init4: initModule
 }
}
animation4().init4();




$(document).ready(function(){
  $('.btn_nav>a').on('click', function(){
    $('.fullScreen_Menu').fadeIn();
  });
  $('.close_btn').on('click', function(){
    $('.fullScreen_Menu').hide(); 
  });  
});