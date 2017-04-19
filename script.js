$(document).ready(onReady);

function onReady(){
  $.ajax({
    url: "http://www.omdbapi.com/?t=moneyball",
    success: function(response){
      $('h1').text(response.Title);
      $('.poster').append("<img src='"+ response.Poster +"'>");
      $('.poster').effect('bounce',{times: 2}, 'slow');
      var actors = "<p>Starring: "+ response.Actors + "</p>";
      var description = "<p>" + response.Plot + "</p>";
      var rateAndRun = "<p> Rating: " + response.Rated + " Runtime: " + response.Runtime + "</p>";
      $('.info').append(description + actors + rateAndRun);
    }
  });
}
