'use strict';
window.onload=function(){
  var listCountMessage = setListMessage();
  alert(listCountMessage);

  // job2
  createListCountHeaderElement();
  updateListCountHeaderMessage();

  // job3
  createNewItemTextInput();

//Job4
  addRemoveButtonsToExistingItems();
}
// document.addEventListener("DOMContentLoaded", function(event) {
    // 1. alert user
  // var list = document.getElementsByTagName('ul');
  // var message = "This page has " + list[0].children.length  +  " list items";
  // alert(message);
  // 2. Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.

  // var h1 = document.getElementsByTagName('h1').appendChild(listHeading);
  // var h2 = document.createElement('h2');
  // h1.innerHTML = "You Have " + list[0].children.length  + " items in your shopping cart";
  // h1.appendChild(h2);


***
function setListMessage(){
  let list = document.getElementsByTagName('ul');
  return "This page has" + list[0].children.length + "items in your shopping cart";
}
function createListCountHeaderElement(Message){
  let listHeading=document.createElement('h2');
  document.getElementsByTagName('h1')[0].appendChild(listHeading);
  listHeading.setAttribute("id", "list-Heading");
}
  function updateListCountHeaderMessage (){
    let listAlert = setListMessage();
    let listHEading = document.getElementById("list-heading");
    listHeading.innerHTML = listAlert;
  }
function addRemoveButtonsToExistingItems(){
  let list=document.getElementById("shopping-list");
  for (let i=0, i<list.children.length;i++){
    addRemoveButton(list.children[i]);
  } )
}
***
});

// add event listener = window onload.. waits for the entire window to finish loading
window.onload = function() {
  var list = document.getElementsByTagName('ol');
  var message = "This page has "+ list[0].children.length  + "list items";
  // alert(message);

   // 4 - adding an H1 to the body
  var newh1 = document.createElement('h1');
  newh1.innerHTML = "Manipulating the DOM";
//   remember to append it so it goes into the document
  document.body.appendChild(newh1);


//   5. remove paragraph 3
  var div = document.getElementById('div');
//   remember to look where your pargraph is
  var p4 = document.getElementById('P3');
  //removing child rather than removing an element.
  div.removeChild(p4);

//   6. add the 5th item list
  var list5 = document.createElement('li');
  list5.innerHTML = "Fifth List Item";
  list[0].appendChild(list5);

//   7. add colors. doesn't show up until you type this in
//   dont need to manipulate the html and add div color
  document.body.classList.add("colors");
  }
