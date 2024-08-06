async function getCurrentWeather() {
  try {
    const searchInput = document.getElementById("search");
    console.log(searchInput.value);
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=f370bb64deec4e7fbd9101053240608&q=${searchInput.value}&aqi=no`
    );

    const data = await response.json();
    console.log(data);
    document.getElementById(
      "temp"
    ).innerHTML = `${data.current.temp_c}<span style="font-size:2rem;">&deg;C</span> <p style="font-size: 1.5rem; margin-top: 0.2rem;">${data.current.condition.text}</p>`;
    document.getElementById("cityName").innerHTML = `${data.location.name}`;
    document.getElementById("details").innerHTML = `<div style="display: flex;">
    <img src="./assets/icons/rainy.png" width="100" height="100" />
    <div style="padding-left: 1rem;">
    <p>Feels Like: ${data.current.feelslike_c} &deg;C</p>
    <p>${data.current.humidity}&percnt;</p>
    <p>${data.current.gust_kph}km/h</p>
    </div>
    </div>`;
  } catch (error) {
    console.log(error);
  }
}

async function getForecast() {
  try {
    const searchInput = document.getElementById("search");
    console.log(searchInput.value);
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=f370bb64deec4e7fbd9101053240608&q=${searchInput.value}&days=5`
    );
    const foreCastData = await response.json();
    console.log(foreCastData);
    const dateStr = foreCastData.forecast.forecastday.map((item) =>
      String(item.date)
    );
    const date1 = new Date(dateStr[0]);
    const date2 = new Date(dateStr[1]);
    const date3 = new Date(dateStr[2]);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const formattedDate1 = date1.toLocaleDateString("en-US", options);
    const formattedDate2 = date2.toLocaleDateString("en-US", options);
    const formattedDate3 = date3.toLocaleDateString("en-US", options);
    document.getElementById("card1").innerHTML = `<h4>${formattedDate1}</h4>
    <p style="font-size: 1.2rem;">Temp: ${foreCastData.forecast.forecastday[0].day.avgtemp_c}</p>
    <p>${foreCastData.forecast.forecastday[0].day.condition.text}</p>`;
    document.getElementById("card2").innerHTML = `<h4>${formattedDate2}</h4>
    <p style="font-size: 1.2rem;">Temp: ${foreCastData.forecast.forecastday[1].day.avgtemp_c}</p>
    <p>${foreCastData.forecast.forecastday[1].day.condition.text}</p>`;
    document.getElementById("card3").innerHTML = `<h4>${formattedDate3}</h4>
    <p style="font-size: 1.2rem;">Temp: ${foreCastData.forecast.forecastday[2].day.avgtemp_c}</p>
    <p>${foreCastData.forecast.forecastday[2].day.condition.text}</p>`;
  } catch (error) {
    console.log(error);
  }
}
