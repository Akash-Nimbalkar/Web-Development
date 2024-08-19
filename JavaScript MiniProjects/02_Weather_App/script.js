console.log("Hello Jee");

const city = "Lonand";
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherInfo(data) {
  let newPara = document.createElement("p");
  newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
  document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
  try {
    //   let latitude = 15.3333;
    //   let longitude = 74.0833;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    console.log(response);
    const data = await response.json();
    console.log(data);

    renderWeatherInfo(data);
  } catch (err) {
    console.log("Got Error!", err);
  }
}

async function getCustomWeatherDetails() {
  try {
    let latitude = 18.620239;
    let longitude = 73.760483;

    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    let data = await result.json();
    console.log(data);
    renderWeatherInfo(data);
  } catch (err) {
    console.log("Error Found!", err);
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("No Geolocation Support");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  console.log(lat, long);
}
