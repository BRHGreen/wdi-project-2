//registered user: qwerty, qwerty@qwerty.com, pw: qwerty

const App = App || {};

App.init = function() {
  this.apiUrl = 'http://localhost:3000/api';
  this.$main = $('main');

  $('.register').on('click', this.register.bind(this));
  $('.login').on('click', this.login.bind(this));
  $('.map').on('click', this.mapSetup.bind(this));
  $('.logout').on('click', this.logout.bind(this));
  $('.usersIndex').on('click', this.usersIndex.bind(this));
  this.$main.on('submit', 'form', this.handleForm);

  if (this.getToken()) {
    this.loggedInState();
  } else {
    this.loggedOutState();
  }
};

App.loggedInState = function(){
  $('.loggedOut').hide();
  $('.loggedIn').show();
  this.usersIndex();
};

App.loggedOutState = function(){
  $('.loggedOut').show();
  $('.loggedIn').hide();
  this.register();
};

App.register = function() {
  if (event) event.preventDefault();
  this.$main.html(`
    <h2>Register</h2>
    <form method="post" action="/register">
      <div class="form-group">
        <input class='form-control' type="text" name="user[username]"
        placeholder="Username">
      </div>
      <div class='form-group'>
        <input class='form-control' type="email" name="user[email]" placeholder ="Email">
      </div>
      <div class='form-group'>
        <input class='form-control' type="password" name="user[password]" placeholder="Password">
      </div>
      <div class='form-group'>
        <input class='form-control' type="password" name="user[passwordConfirmation]"
        placeholder="Password Confirmation">
      </div>
        <input class='btn btn-primary' type="submit" value="Register">
    </form>
    `);
};

App.login = function() {
  event.preventDefault();
  this.$main.html(`
    <h2>Login</h2>
      <form method="post" action="/login">
        <div class='form-group'>
          <input class="form-control" type="email" name="email" placeholder="Email">
        </div>
        <div class='form-group'>
          <input class="form-control" type="password" name="password" placeholder="Password">
        </div>
        <input class='btn btn-primary' type="submit"  value="Login">
      </form>
    `);
};

App.logout = function() {
  event.preventDefault();
  this.removeToken();
  this.loggedOutState();
};

App.usersIndex = function(){
  if (event) event.preventDefault();
  let url = `${this.apiUrl}/users`;
  return this.ajaxRequest(url, 'get', null, (data) => {
    this.$main.html(`
      <div class='card-deck-wrapper'>
        <div class='card-deck'>
        </div>
      </div>
    `);
    let $container = this.$main.find('.card-deck');
    $.each(data.users, (i, user) => {
      $container.append(`
        <div class='card col-md-4'>
          <img clas='card-img-top'
          src='http://fillmurray.com/300/300'
          alt='Card image cap'>
          <div class='card-block'>
            <h4 class='card-title'>${user.username}</h4>
            <p class='card-text'>what? blah. OK.</p>
            <p class='card-text'><small calss='text-muted'>eh?</small></p>
          </div>
        </div>`);
    });
  });
};

App.handleForm = function(){
  event.preventDefault();

  let url = `${App.apiUrl}${$(this).attr('action')}`;
  let method = $(this).attr('method');
  let data   = $(this).serialize();

  return App.ajaxRequest(url, method, data, (data) => {
    if (data.token)
    App.setToken(data.token);
    App.loggedInState();
  });
};

App.ajaxRequest = function(url, method, data, callback) {
  return $.ajax({
    url,
    method,
    data,
    beforeSend:
    this.setRequestHeader.bind(this)
  })
  .done(callback)
  .fail(data => {
    console.log(data);
  });
};

App.setRequestHeader = function (xhr, settings) {
  xhr.setRequestHeader('Authorization',`Bearer ${this.getToken()}`);
};

App.setToken = function(token){
  return window.localStorage.setItem('token', token);
};

App.getToken = function(){
  return window.localStorage.getItem('token');
};

App.removeToken = function(){
  return window.localStorage.clear();
};

//**********map***************:

App.addInfoWindowForRestaurant = function(restaurant, marker) {
  google.maps.event.addListener(marker, 'click', () => {
    if (typeof this.infowindow != "undefined") this.infowindow.close();

    this.infowindow = new
    google.maps.InfoWindow({
      content:`<div>
                <div height=150 width=150><img src="${restaurant.image}" width=100%></div>
                <h4>${restaurant.name}</h4>
                <p>Website: ${restaurant.url}</p>
               </div>`
    });
    this.infowindow.open(this.map, marker);
    this.map.setCenter(marker.getPosition());
  });
};

const icon = {
  url: "./images/green_v.png",
  scaledSize: new google.maps.Size(30, 30),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(0, 0)
};

App.createMarkerForRestaurant = function(restaurant) {
  // console.log(restaurant)
  let latlng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  // console.log(latlng)
  let marker = new google.maps.Marker({
    position: latlng,
    map: this.map,
    icon: icon
  });
  this.addInfoWindowForRestaurant(restaurant, marker);
};

App.loopThroughRestaurants = (data) => {
  $.each(data.restaurants, (index, restaurant) => {
      App.createMarkerForRestaurant(restaurant);
  });
};

App.getRestaurants = function(){
  let url = "http://localhost:3000/api/restaurants";
  App.ajaxRequest(url, "GET", null, App.loopThroughRestaurants);
};

App.mapSetup = function() {
  console.log("Setting up map init");

  $("main").html("<div id='map-canvas'></div>");
  let canvas = document.getElementById('map-canvas');
  let mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(51.506178,-0.088369),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
  this.getRestaurants();
};


$(App.init.bind(App));
