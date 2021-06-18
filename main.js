"use strict";

//foto

function fotoChange(num){
  var foto = 'img/img' + num + '.jpg'
  document.getElementById("mainImg").src = foto;
}

 //muzik

function togglePlay() {
  var x = document.getElementById("myAudio"); 
  
    if (x.paused) {
         x.play();
    }
    else {
         x.pause();
    }
 };