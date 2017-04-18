$(document).ready(onReady);

function onReady(){
  $.ajax({
    url: "http://www.omdbapi.com/?t=moneyball",
    success: function(response){
      $('h1').text(response.Title);
      $('.poster').append("<img src='"+ response.Poster +"'>");
    }
  });
}
