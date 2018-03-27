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

  var list2 = document.getElementsByTagName('li');
  var input = document.createElement("INPUT");
      input.setAttribute("type", "text");
      input.setAttribute("value", "");
      list[0].appendChild(input);
    var btn = document.createElement("INPUT");
          btn.setAttribute("type", "submit");
          list[0].appendChild(btn);




              var input = document.getElementById('item-text').value;
              document.getElementById('boldStuff2').innerHTML = input;
              var entry = document.createElement('li');
              entry.appendChild(document.createTextNode(input));
              list[0].appendChild(entry);

});
});
