"use strict";

var data = {
  totalRevs:360,
  totalCurrent:0,
  totalRPS: 0,
  counter: 0
};

setInterval(goGo,1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#drake").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}
// var title = document.title;
// function changeTitle() {
//     count++;
//     var newTitle = '(' + count + ') ' + title;
//     document.title = newTitle;
// }
// function newUpdate() {
//     update = setInterval(changeTitle, $("#drake").click(function ());
//   }
// var title = document.title;

function updateReport() {
// title.text(Math.floor(data.totalCurrent + title);
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
 document.title = data.totalCurrent + " Good Wishes";
}


// fades the right bar in and out
$("#drake").click(function (){
   $("#wish1").fadeToggle(5000);
    $("#wish2").fadeToggle("slow");
   $("#wish3").fadeToggle(3000);
   $("#wish4").fadeToggle(1000);
   $("#wish5").fadeToggle(2000);
   $("#wish6").fadeToggle(3000);
   $("#wish7").fadeToggle(2400);
   $("#wish8").fadeToggle(26000);
   $("#wish9").fadeToggle(3500);
   $("#wish10").fadeToggle(30000);
   $("#wish11").fadeToggle(3200);
   $("#wish12").fadeToggle(5000);
   // $("#wish13").fadeToggle(1800);
   // $("#wish14").fadeToggle(2200);
   // $("#wish15").fadeToggle(5000);


  data.totalRevs ++;
  data.totalCurrent ++;
  updateReport();

})



$(".button").click(function (){
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalRPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );


  }
  updateReport();
});
//
// var count = 0;
//
//
// var title = document.title;
// function changeTitle() {
//     count++;
//     var newTitle = '(' + count + ') ' + title;
//     document.title = newTitle;
// }
// function newUpdate() {
//     update = setInterval(changeTitle, $("#drake").click(function ());
//   }
// docBody.onload = newUpdate;
