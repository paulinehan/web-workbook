  
'use strict';

$(document).ready(function(){
  var turn = "X";
  var counter = 0;
  $('[data-cell]').on('click', function(){
    if($(this).text() === ''){
      $(this).text(turn);
      counter = 0;
      wins();
      if(turn === "O"){
        turn = "X";
      }

      else{
        counter++;
        turn = 'O';
      }
    }
   })


function wins() {
  if($('[data-cell = "0"]').text() === turn &&
    $('[data-cell = "3"]').text() === turn &&
    $('[data-cell = "6"]').text() === turn) {
    alert(turn+  " wins");
  }
  else if($('[data-cell = "1"]').text() === turn &&
    $('[data-cell = "4"]').text() === turn &&
    $('[data-cell = "7"]').text() === turn) {
    alert(turn + " wins");

  }
   else if($('[data-cell = "2"]').text() === turn &&
    $('[data-cell = "5"]').text() === turn &&
    $('[data-cell = "8"]').text() === turn) {
    alert(turn + " wins");
  }
  else if($('[data-cell = "0"]').text() === turn &&
    $('[data-cell = "1"]').text() === turn &&
    $('[data-cell = "2"]').text() === turn) {
    alert(turn + " wins");
  }
  else if($('[data-cell = "3"]').text() === turn &&
    $('[data-cell = "4"]').text() === turn &&
    $('[data-cell = "5"]').text() === turn) {
    alert(turn + " wins");
  }
  else if($('[data-cell = "6"]').text() === turn &&
    $('[data-cell = "7"]').text() === turn &&
    $('[data-cell = "8"]').text() === turn) {
    alert(turn + " wins");
  }
   else if($('[data-cell = "0"]').text() === turn &&
    $('[data-cell = "4"]').text() === turn &&
    $('[data-cell = "8"]').text() === turn) {
    alert(turn + " wins");
  }
   else if($('[data-cell = "2"]').text() === turn &&
    $('[data-cell = "4"]').text() === turn &&
    $('[data-cell = "6"]').text() === turn) {
    alert(turn + " wins");
  }
else if(counter===7){
    alert('tie game!');

  }
}
console.log(counter)



$('#clear').click(function(){
         $("[data-cell]").text('');
      turn = 'X';
        })




})


//
//
//   function wins(){
//     if($('[data-cell="0"]').text()=== turn&&
//       $('[data-cell="3"]').text()=== turn&&
//       $('[data-cell="6"]').text()=== turn)

//       elseif($('[data-cell="1"]').text()=== turn&&
//       $('[data-cell="4"]').text()=== turn&&
//       $('[data-cell="7"]').text()=== turn)

//     elseif($('[data-cell="1"]').text()=== turn&&
//       $('[data-cell="4"]').text()=== turn&&
//       $('[data-cell="7"]').text()=== turn)

//       var div = document.getElementById('announce-winner');
//       div.innerHTML = "player " + turn + " wins!";
//       document.appendChild(div);{
//      alert(`Player ${turn} wins!`);
//   }
//     };

//
// //   remember to append it so it goes into the document
//
//         // console.log(`${playerTurn} Wins`);
//       // "hello" + playerTurn + 'Wins' vs 'hello' vs `hello ${playerTurns}`
//     }
//
//
//
//

//
// //  function clearboard(){
// //    // $("#clear").on('click', function(){
// //    //   // document.removeChild(turn);
// //      $(this).removeClass('row');
// //      console.log("test1");
// //    // document.querySelector($(".row").value = "");
// //    // console.log("test");
// //    }
//     $('#clear').click(function(){
//          $("[data-cell]").text('');
//       turn = 'X';
//         })
// function win()
// ||
//
// })
//     // else  start... here
// //       }
// //     else{($('[data-cell="1"]').text()===turn &&
// //       $('[data-cell="4"]').text()===turn &&
// //       $('[data-cell="7"]').text()===turn){
// //       alert("x wins");
// //         console.log(`${playerTurn} Wins`)};
// //
// //     }
// if(){
//
// }else if(){
//
// }else{}
// or
//
//
// if(){
//
// }if(){
//
// }else(){}
