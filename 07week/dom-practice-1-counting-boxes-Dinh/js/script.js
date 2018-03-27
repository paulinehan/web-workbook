'use strict';
// When the user clicks on the '10' box, a separate counter counts up by 10.
// When the user clicks on the '100' box, a separate counter counts up by 100.
// Create a new box that says click all which triggers the effect of all boxes being clicked at the same time.
// When the page loads, a pop up appears saying 'Are you ready to count by ones, tens, and hundred?'
// Extra Credit: allow the user to drag and drop the shapes.


// when the document is done loading, run the script inside
$(document).ready(function() {
  alert('Are you ready to count by ones, tens, and hundreds?')

  $('#counter-1').click(function ones() {
     var num = $(this).text();
      num++;
    $(this).text(num);

  })

    $('#counter-10').click(function tens() {
     var ten = Number($(this).text());
     var x = ten + 10;
    $(this).text(x);

  })

    $('#counter-100').click(function cens() {
     var cen = Number($(this).text());
     var x = cen + 100;
    $(this).text(x);

  })

  $('#counter-all').click(function (){
    $('#counter-100').trigger('click')
    $('#counter-10').trigger('click')
    $('#counter-1').trigger('click')
  })

  $(function() {
    $('.box').draggable();
  });



});
