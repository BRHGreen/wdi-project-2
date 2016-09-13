
const App = App || {};

App.init = function() {
  $('#register').on('click', a);
  $('#login').on('click', this.login.bind(this));

  this.apiUrl = 'http://localhost:3000/api';
  this.$main = $('main');

  this.$main.on('submit', 'form', this.handleForm);
};

// App.register = function() {
//   event.preventDefault();
//   console.log('anything?');
// };

function a() {
  console.log('???');
}







const googleMap = googleMap || {};

googleMap.mapSetup = function() {
  let canvas = document.getElementById('map-canvas');
  let mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(51.506178,-0.088369),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
};

$(googleMap.mapSetup.bind(googleMap));

$('#login').on('click', function() {
  console.log('yo');
});

$(App.init.bind(App));
