"use strict";

var data = {
  totalRevs:360,
  totalCurrent:0,
  totalRPS: 0
};

setInterval(goGo,1000);

function goGo() {
  data.totalRevs += data.totalRPS;
  data.totalCurrent += data.totalRPS;
  $("#drake").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#rps").text((data.totalRPS/70.4).toFixed(3));
}



$("#drake").click(function (){
   $("#wish1").fadeToggle(1000);
    $("#wish2").fadeToggle("slow");
   $("#wish3").fadeToggle(3000);
   $("#wish4").fadeToggle(1000);
   $("#wish5").fadeToggle(2000);
   $("#wish6").fadeToggle(3000);
   $("#wish7").fadeToggle(2400);
   $("#wish8").fadeToggle(5000);
   $("#wish9").fadeToggle(3500);
   $("#wish10").fadeToggle(4000);

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
})

var count = 0;
var title = document.title;
function changeTitle() {
    count++;
    var newTitle = '(' + count + ') ' + title;
    document.title = newTitle;
}
