'use strict';

var App = App || {};

App.init = function () {
  this.apiUrl = 'http://localhost:3000/api';
  this.$main = $('main');

  $('.register').on('click', this.register.bind(this));
  $('.login').on('click', this.login.bind(this));
  $('.logout').on('click', this.logout.bind(this));
  $('.usersIndex').on('click', this.usersIndex.bind(this));
  this.$main.on('submit', 'form', this.handleForm);

  if (this.getToken()) {
    this.loggedInState();
  } else {
    this.loggedOutState();
  }
};

App.loggedInState = function () {
  $('.loggedOut').hide();
  $('.loggedIn').show();
  this.usersIndex();
};

App.loggedOutState = function () {
  $('.loggedOut').show();
  $('.loggedIn').hide();
  this.register();
};

App.register = function () {
  event.preventDefault();
  this.$main.html('\n    <h2>Register</h2>\n    <form method="post" action="/register">\n      <div class="form-group">\n        <input class=\'form-control\' type="text" name="user[username]"\n        placeholder="Username">\n      </div>\n      <div class=\'form-group\'>\n        <input class=\'form-control\' type="email" name="user[email]" placeholder ="Email">\n      </div>\n      <div class=\'form-group\'>\n        <input class=\'form-control\' type="password" name="user[password]" placeholder="Password">\n      </div>\n      <div class=\'form-group\'>\n        <input class=\'form-control\' type="password" name="user[passwordConfirmation]"\n        placeholder="Password Confirmation">\n      </div>\n        <input class=\'btn btn-primary\' type="submit" value="Register">\n    </form>\n    ');
};

App.login = function () {
  event.preventDefault();
  this.$main.html('\n    <h2>Login</h2>\n      <form method="post" action="/login">\n        <div class=\'form-group\'>\n          <input type="email" name="email" placeholder="Email">\n        </div>\n        <div class=\'form-group\'>\n          <input class= \'form-control\' type="password" name="password" placeholder="Password">\n        </div>\n        <input class=\'btn btn-primary\' type="submit"  value="Login">\n      </form>\n    ');
};

App.logout = function () {
  event.preventDefault();
  this.removeToken();
  this.loggedOutState();
};

App.usersIndex = function () {
  var _this = this;

  if (event) event.preventDefault();
  var url = this.apiUrl + '/users';
  return this.ajaxRequest(url, 'get', null, function (data) {
    _this.$main.html('\n      <div class=\'card-deck-wrapper\'>\n        <div class=\'card-deck\'>\n        </div>\n      </div>\n    ');
    var $container = _this.$main.find('.card-deck');
    $.each(data.users, function (i, user) {
      $container.append('\n        <div class=\'card col-md-4\'>\n          <img clas=\'card-img-top\'\n          src=\'http://fillmurray.com/300/300\'\n          alt=\'Card image cap\'>\n          <div class=\'card-block\'>\n            <h4 class=\'card-title\'>' + user.username + '</h4>\n            <p class=\'card-text\'>what? blah. OK.</p>\n            <p class=\'card-text\'><small calss=\'text-muted\'>eh?</small></p>\n          </div>\n        </div>');
    });
  });
};

App.handleForm = function () {
  event.preventDefault();

  var url = '' + App.apiUrl + $(this).attr('action');
  var method = $(this).attr('method');
  var data = $(this).serilaize();

  return App.ajaxRequest(url, method, data, function (data) {
    if (data.token) App.setToken(data.token);
    App.loggedInState();
  });
};

App.ajaxRequest = function (url, method, data, callback) {
  return $.ajax({
    url: url,
    method: method,
    data: data,
    beforeSend: this.setRequestHeader.bind(this)
  }).done(callback).fail(function (data) {
    console.log(data);
  });
};

App.setRequestHeader = function (xhr, settings) {
  xhr.setRequestHeader('Authorization', 'Bearer ' + this.getToken());
};

App.setToken = function (token) {
  return window.localStorage.setItem('token', token);
};

App.getToken = function () {
  return window.localStorage.getItem('token');
};

App.removeToken = function () {
  return window.localStorage.clear();
};

$(App.init.bind(App));

var googleMap = googleMap || {};

googleMap.mapSetup = function () {
  var canvas = document.getElementById('map-canvas');
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(51.506178, -0.088369),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(canvas, mapOptions);
};

$(googleMap.mapSetup.bind(googleMap));

$('#login').on('click', function () {
  console.log('yo');
});