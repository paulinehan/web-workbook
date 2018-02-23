var dieChar = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll(){
  document.getElementByID("dice").innerHTML ="";
  for(a=0; a<5; a++){
    var roll = Math.floor(Math.random()*6)+1;
    document.getElementById("dice").innerHTML += "<span class='die' data-roll='"+roll+"'>"+dieChar[roll]+"</span>";
  }
  report();
}
roll();
