
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const city = document.getElementById("city-input").value;
  //console.log(city);
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather.fetchTodayForecast().then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(response);

      // On récupère l'information principal
      const main = data.list[0].weather[0].main;
      const main1 = data.list[1].weather[0].main;
      const main2 = data.list[2].weather[0].main;
      const main3 = data.list[3].weather[0].main;


      const description = data.list[0].weather[0].description;
      const description1 = data.list[1].weather[0].description;
      const description2 = data.list[2].weather[0].description;
      const description3 = data.list[3].weather[0].description;


      const temp = data.list[0].temp.night;
      const temp1 = data.list[1].temp.night;
      const temp2 = data.list[2].temp.night;
      const temp3 = data.list[3].temp.night;

      const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);
      


      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('demain-forecast-main').innerHTML = main1;
      document.getElementById('apresdemain-forecast-main').innerHTML = main2;
      document.getElementById('apresdemain2-forecast-main').innerHTML = main3;

      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('demain-forecast-more-info').innerHTML = description1;
      document.getElementById('apresdemain-forecast-more-info').innerHTML = description2;
      document.getElementById('apresdemain2-forecast-more-info').innerHTML = description3;

      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('icon1-weather-container').innerHTML = icon1;
      document.getElementById('icon2-weather-container').innerHTML = icon2;
      document.getElementById('icon3-weather-container').innerHTML = icon3;

      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      document.getElementById('demain-forecast-temp').innerHTML = `${temp1}°C`;
      document.getElementById('apresdemain-forecast-temp').innerHTML = `${temp2}°C`;
      document.getElementById('apresdemain2-forecast-temp').innerHTML = `${temp3}°C`;
      

      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
