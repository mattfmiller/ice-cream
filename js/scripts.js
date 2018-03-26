$(function(){

  var flavors = ['cookie dough', 'chocolate birthday cake', 'cookies and cream'];


  flavors.forEach(function(flavor, index) {
    $('#favoriteFlavors').append('<li>' + flavor + '</li>');
  });
});
