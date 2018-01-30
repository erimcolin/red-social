// Initialize Firebase
var config = {
    apiKey: "AIzaSyAzS0COGKf_1hearowkt0TGMGPIdtz3C0Q",
    authDomain: "producto-final-11726.firebaseapp.com",
    databaseURL: "https://producto-final-11726.firebaseio.com",
    projectId: "producto-final-11726",
    storageBucket: "",
    messagingSenderId: "314770465477"
  };
  firebase.initializeApp(config);

// boton para autenticarse con google
$('#botonGoogle').click(function(){
  autentication();
})

// function authGoogle(){
//   var provider = new firebase.auth.GoogleAuthProvider();
//   autentication(provider);
// }

function autentication() {
    if (!firebase.auth().currentUser) {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/plus.login');
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        // Informacion del usurio resgistrado
        var user = result.user;
        window.location.href = 'user.html';
      }).catch(function(error) {
        // Manejo de errores
        var errorCode = error.code;
        var errorMessage = error.message;
        // El correo electrónico utilizado de la cuenta del usuario
        var email = error.email;
        // El firebase.auth.AuthCredential tipo que se utilizado
        var credential = error.credential;
        if (errorcode === 'auth/account-exists-with-different-credential') {
          alert('Es el mismo usuario');
        }
      });
    } else {
      firebase.auth().signOut();
    }
  };

 // boton para cerrar sesión
  $('#signOut').on('click', function() {
      // console.log('funciona');
      firebase.auth().signOut().then(function(user) {
        console.log('cerrando sesión');
        window.location.href = 'index.html';
      }).catch(function(error) {
        console.log(error);
      });
    });


// firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });
//
// }



// base de datos
var $title = $('#title');
var database = firebase.database().ref().child('titulo');

database.on('value', function(snapshot){
  $title.text(snapshot.val());
})
