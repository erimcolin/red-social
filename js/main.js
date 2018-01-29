function loadPage(){
  splash();
  // funcion q al dar click a la imagen mande a loggearse
};

function splash(){
  $('.homePage').hide();
  setTimeout(function() {
    $('#logo').fadeOut(500);
    $('.homePage').show();
  }, 2000);
}


$(document).ready(loadPage);
