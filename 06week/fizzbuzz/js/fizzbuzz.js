'use strict';

function fizzbuzz() {
for(var i=0; i<=100; i++){

if (i%3 === 0) {
if (i%5 === 0) {

document.write("fizzbuzz");
} else{
document.write('fizz');
}

else if(i%5 === 0) {
document.write('buzz');
}

else{
document.write(i);
}

{
document.write('<br><br>');
}
}
fizzbuzz();
