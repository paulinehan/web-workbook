$(document).ready(function (){
  var button1 = 0,
      button2 = 0,
      button3 = 0;
  var clickFunction = function(event){
    // console.log('testing');
    var counter;
    switch(event.target.id){
      case 'button1':
        button1++;
        counter = button1;
        break;
       case 'button2':
        button2++;
        counter = button2;
        break;
       case 'button3':
        button3++;
        counter = button3;
        break;
    }
    $('span').text(event.target.id + " has been clicked " +counter+" times");
  }

  // $('#button1').click(function(){
  //   button1++;
  //   $('span').text("button 1 has been clicked " +button1+" times");
  // })
  $('#button1').click(clickFunction);
  $('#button2').click(clickFunction);
  $('#button3').click(clickFunction);

})
