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
    document.getElementById(
      "condition"
    ).innerHTML = `${data.current.condition.text}`;
  } catch (error) {
    console.log(error);
  }
}

async function getForecast() {
  try {
    const searchInput = document.getElementById("search");
    console.log(searchInput.value);
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=f370bb64deec4e7fbd9101053240608&q=${searchInput.value}&days=7`
    );
    const foreCastData = await response.json();
    console.log(foreCastData);
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("search").addEventListener("change", getForecast);
