function loadPage(){
  // splash();
  $searchImput.keyup(filterPlaces);
  // funcion q al dar click a la imagen mande a loggearse
  // $('form').submit(filterPlaces);
  $('#search_button').click(cleanInput);
  
};

// function splash(){
//   $('.homePage').hide();
//   setTimeout(function() {
//     $('#logo').fadeOut(500);
//     $('.homePage').show();
//   }, 2000);
// }
var $searchImput = $('#find-places');

function filterPlaces () {
  var inputSearch = $searchImput.val().toLowerCase();

  if ($searchImput.val().trim().length > 0) {
    // console.log(inputSearch)
    var filterCategory = data.filter(function (item) {
      return item.category.toLowerCase().indexOf(inputSearch) >= 0;
    })
    $('#photo_container').empty();
    filterCategory.forEach(function (item) {
      putPhoto(item)
    })
  }
};

function putPhoto (item) {
  var $container = $('#photo_container');
// crear elementos de DOM
  // var $divRow = $('<div />',{
  //   'class':'row'
  // });
  var $divColumna = $('<div />',{
    'class':'col-md-4 col-sm-6 col-xs-12'
  });
  var $h3 = $('<h3 />');
  var $img = $('<img />', {
    'class':'img-responsive width-img'
  });
  var $p = $('<p />');
  // atributos
  $img.attr('src',item.img);
  // asignando valores
  $h3.text(item.title);
  $p.text(item.description);

  // padres a hijos
  $divColumna.append($h3);
  $divColumna.append($img);
  $divColumna.append($p);

  $container.append($divColumna);
//  limpiar contenedor
  // cleanInput();
}

function cleanInput(e) {
  e.preventDefault;
  $searchImput.val('');
}


$(document).ready(loadPage);

