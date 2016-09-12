const App = App || {};

App.init = function (){
  $("#register").on("click", this.resgister.bind(this));
  $("#login").on("click", this.login.bind(this));

  this.apiUrl = 'http://localost:3000/api';
  this.$main = $('main');

  this.$main.on('submit', 'form', this.handleForm);
};

console.log(App);
