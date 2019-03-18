$ (document).ready(function(){
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.ajax({
      url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ce130a8a5bc17efa4f41eb8b67a3133`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      },
      error: function(response) {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
