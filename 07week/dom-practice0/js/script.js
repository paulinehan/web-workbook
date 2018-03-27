'use strict';
function addItem(){
	var ul = document.getElementById("list");
  var text = document.getElementById("text");
  var li = document.createElement("li");
  li.setAttribute('id',text.value);
  li.appendChild(document.createTextNode(text.value));
  ul.appendChild(li);
}

function removeItem(){
	var ul = document.getElementById("list");
  var text = document.getElementById("text");
  var item = document.getElementById(text.value);
  ul.removeChild(item);
}

 document.body.classList.add("colors");


 var ul = document.getElementsByTagName('ul');
 var newh1 =  document.getElementsByTagName('h1');
 var h4 = document.createElement('h4');
 h4.className="cart-update";
 h4.innerHTML = "You Have " + ul[0].children.length  + " items in your shopping cart";
newh1[0].appendChild(h4);

window.onload = function(){
  var list = document.getElementsByTagName('ul');
  var message = "This page has " + list[0].children.length  +  " list items";
  alert(message);
}
