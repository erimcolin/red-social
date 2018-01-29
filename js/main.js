function loadPage(){
  splash();

};

function splash(){
  $('.homePage').hide();
  setTimeout(function() {
    $('#logo').fadeOut(500);
    $('.homePage').show();
  }, 2000);
}


$(document).ready(loadPage);
