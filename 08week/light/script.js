"use strict";

$(document).ready(function(){
  var start = true;
   //anonymous function vs named function javascript
  var toggle = function(){

    if(start){
      $('#switch-inner').addClass('bottom');
      $('#light').addClass('lightOn');
    }else{
       $('#switch-inner').removeClass('bottom');
       $('#light').removeClass('lightOn');
    }
    start= !start;
  }
  $('#switch').click(toggle);
  //   $('#switch').on('click', function(){

//    })
});


//adding/removing css class
