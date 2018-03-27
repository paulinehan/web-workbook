'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    // 1. alert user
  var list = document.getElementsByTagName('ul');
  var message = "This page has " + list[0].children.length  +  " list items";
  // alert(message);

  // 2. Add a <h2> to the page under the title that says 'You have _ items in your shopping cart'. Do not use html to do this. Use JavaScript.
  var newh1 =  document.getElementsByTagName('h1');
  var h2 = document.createElement('h2');
  // h2.className="h2";
  h2.innerHTML = "You Have " + list[0].children.length  + " items in your shopping cart";
  newh1[0].appendChild(h2);

  // add in an input here
  //
  // var newli = document.getElementsByTagName('li');
  // var input = document.createElement("input");
  //     input.setAttribute("type", "text");
  //     input.setAttribute("value", "");
  //     list[0].appendChild(input);
  //     li.innerHTML=text;
  //     document.getElementById('shopping-list').appendChild(li);
  //     // input.appendChild(text(newli));

    // var btn = document.createElement("input");
    //       btn.setAttribute("type", "submit");
    //       list[0].appendChild(btn);


var addBtn = document.getElementById('button');
var insideText= document.createTextNode('add Items');
addBtn.setAttribute('Id', 'button1');
box.prependChild(addBtn);
addBtn.appendChild(insideText);

const shoppingList = document.getElementById('shopping-list');
var box = document.getElementById('div');
var inputBox = document.getElementById('input');

document.getElementById('textbox').placeholder="New items here..";

document.getElementById("button1").onclick =function(){
var text = document getElementById('textbox').value;
  var li = document.createElement('li');
  li.innerHTML= text;
  document.getElementById('shopping-list').appendChild(li);
}

inputBox.setAttribute('Id', 'button1');
box.AppendChild(inputBox);


input.Value = "";


// var addBtn = document.getElementById('button');
// var insideText= document.createTextNode('add Items');
// addBtn.setAttribute('Id', 'button1');
// box.prependChild(addBtn);
// addBtn.appendChild(insideText);




var input = document.getElementById('item-text').value;
document.getElementById('boldStuff2').innerHTML = input;
var entry = document.createElement('li');
entry.appendChild(document.createTextNode(input));
list[0].appendChild(entry);

var cartUpdate = document.createElement("h3");
cartUpdate.setAttribute('class', 'note');

function addItem(event){
  event.preventDefault();
  let newItemText =document.getElementById("item-text").value;
  let newItem = document.createElement('li');
  newItem.innerHTML = newItemText;
  removeButton.onclick=deleteItem;
  appendElement.appendchild(removeButton);
  updateListCountHeaderMessage();


}

function addRemoveButton (appendElement){
  console.log(appendElement);
  let removeButton = document.createElement('button');
removebutton.innerHTML = "remove";
removeButton.onclick = deleteItem;
  addremovebutton(newitem);
  document.getElementById('add-item').reset();


}
function deleteItem(){
var item = document.getElementById('add item');
document.getElementById('shopping-list').removeChild(list.lastChild);
}
});
