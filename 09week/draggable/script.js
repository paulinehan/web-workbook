'use strict';

$(document).ready(function(){
  $('.draggable').draggable({
    revert: "invalid"
  });
  $('#dropArea, #drop1').droppable({
   //event = what happening
   //ui = the item that's being drop
    drop: function(event,ui){
      $(ui.draggable).appendTo(this).attr('style','position:relative');
    }
    console.log("Test");
  });
});
