  "use strict"

  $(document).ready(function(){

  }
    var count = 0

    $('.draggable').draggable({
      revert: "invalid"
    });



    $('#drop1, #drop2, #drop3').droppable({
     //event = what happening
     //ui = the item that's being drop
      drop: function(event,ui){
        count++
        var start = $(ui.draggable).data('block');
        var last = $(this).children().last().data('block');
          if ( start > last ) {

      // ui.draggable.draggable( 'disable' );
      // $(this).droppable( 'disable', 'revert', true );


      $(ui.draggable).draggable( 'option', 'revert', true );
          }else{

        // console.log(`current block ${start}`);
        // console.log('last block ${last}`);
        $(ui.draggable).appendTo(this).attr('style', 'position:"relative"');


          }

     checkWin();
      }
      function checkWin() {
      if($('[data-stack=3]').children().length == 4){
        $('announce-game-won').text(`Winner!`);
      }
    });
  });

  $(".clear").draggable(
     { refreshPositions: true }
  );
