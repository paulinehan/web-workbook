'use strict';
// when the document is done loading, run the script inside
$(document).ready(function() {
  var num = 1;
  $('#counter-1').click(function() {
    num ++;
    $(this).text(num);
  })

  var num2 = 10;
  $('#counter-10').click(function() {
    num2 += 10;
    $(this).text(num2);
  // var num2 = 5;
  // $('#counter-10').click(function() {
  //   // num2 += 10;
  //   $(this).text(num);

})

    var num3 = 100;
  $('#counter-100').click(function() {
    num3 += 100;
    $(this).text(num3);
  })

    $('#counter-all').click(function (){
    $('#counter-100').trigger('click')
    $('#counter-10').trigger('click')
    $('#counter-1').trigger('click')
  })

    $(function() {
    $('.box').draggable();
  })

})
