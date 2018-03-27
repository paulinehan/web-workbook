'use strict';
$(document).ready(function(){
  $('[data-cell]').on("click", function()
    {
    ($(this).text());
     if(!$(this).text()){
    // if($(this).text("")){
      $(this).text('1');
    }else{
      var num = $(this).text();
      num++;
      // console.log(num)
      $(this).text(num);
    }
    // remember to call function 25 here
    hit25();
      // console.log("1");

    console.log($(this));
  })
     // now we want an alert when it hits the number 25
  function hit25(){


  // var clickFunction = function(event){
    // console.log('testing');
    var counter = 0;
    // var numr = 0;
    // var counter;
    // var num1 = parseInt(counter);
    // var counter = numr;
    // var counter = parseInt($(this).text(), 0);

    $('[data-cell]').each(function(){
      counter += Number($(this).text());
      console.log(Number(counter));
  })
    if(counter === 25){
      // alert("25!!");
      $('#announce-winner').text('25!!');
    }
  }
  // mouse over, hover, all options in on
})
