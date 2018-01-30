function loadPage(){
  splash();
  $textBtn.on('click', botonSend);
};

function splash(){
  $('.homePage').hide();
  setTimeout(function() {
    $('#logo').fadeOut(500);
    $('.homePage').show();
  }, 2000);
}

// función para publicar texto
var $textArea = $('.new-text');
var $textBtn = $('#send');
var $container = $('#content');

function botonSend(){
  if ($textArea.val()) {
    $container.prepend('<div class="new-item"><div class="row"><div class="col-md-10" id="new-container"></div></div></div>');
    var $text = $('#new-container');
    var $parrafo = $('<p/>', { 'class': 'paragraph' });
    $parrafo.text($textArea.val());
    $text.prepend($parrafo);
    $textArea.val('');
    $textArea.focus();
  }
};

// var boton = document.getElementById("sent-text");
// var text = document.getElementById("text");
// var newParraf = document.getElementById("container");
// var letterCount = document.getElementById("characteres");

//para imprimir los mensajes
// boton.addEventListener("onclick", publish)

// function publish(event) {
//    if (text.value) {
//      var parraf = document.createElement("p");
//      console.log(parraf);
//      var divContainer = document.createElement("div");
//      console.log(divContainer);
//      parraf.textContent = text.value;
//      console.log(parraf.textContent);
//      divContainer.appendChild(parraf);
//      newParraf.appendChild(divContainer);
//      divContainer.classList.add("content");
//      texto.value = "";
     // parraf.style.marginLeft = '14px';
   // }
// };

$(document).ready(loadPage);
