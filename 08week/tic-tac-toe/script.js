'use strict';

$(document).ready(function(){
  var turn = "X";
  $('[data-cell]').on('click', function(){
    if($(this).text() === ''){
      $(this).text(turn);
      wins();
      if(turn === "O"){
        turn = "X";
      }else{
        turn = 'O';
      }
    }
   })
})

function wins() {
  if($('[data-cell = "0"]').text() === "X" &&
    $('[data-cell = "3"]').text() === "X" &&
    $('[data-cell = "6"]').text() === "X") {
    alert("X wins");
  }
}
  // Put app logic in here
});
// "hello world" + var +""
// // is the same thing as this
// `helloworld ${var}`

// classs stuff starts here

// 'use strict';
//
// $(document).ready(function(){
//   var turn = 'X';
//   $('[data-cell]').on('click', function(){
//     if($(this).text() === ''){
//     $(this).text(turn);
//     wins();
//     if(turn === "O"){
//       turn = "X";
//     }else{
//       turn = "O";
//     }
//
//   }
//   })
//
//
//
//   function wins(){
//     if($('[data-cell="0"]').text()=== turn&&
//       $('[data-cell="3"]').text()=== turn&&
//       $('[data-cell="6"]').text()=== turn)
//
//       elseif($('[data-cell="1"]').text()=== turn&&
//       $('[data-cell="4"]').text()=== turn&&
//       $('[data-cell="7"]').text()=== turn)
//       var div = document.getElementById('announce-winner');
//       div.innerHTML = "player " + turn + " wins!";
//       document.appendChild(div);
//       // alert(`Player ${turn} wins!`);
//
//
// //   remember to append it so it goes into the document
//
//         // console.log(`${playerTurn} Wins`);
//       // "hello" + playerTurn + 'Wins' vs 'hello' vs `hello ${playerTurns}`
//     }
//
//   }
//
//
// function checkTie() {
// let tie = true;
// $('[data-cell]').each(function(){
// if($(this).text()= ''){
// tie = false
// }
// })
// if (tie && ('announce-winner'.text() =='')){
// $('announce-winner'.text('tie')
// }
// }
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
