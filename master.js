const apiKey = "3f8efd18c77414e78a1c95e2e9c13e49";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
let image = document.querySelector(".Weather-image");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";


    
        if(data.weather[0].main == "clear") {
            image.src = "images/clear.png";
        }else if (data.weather[0].main == "Rain"){
            image.src = "images/rain.png";
        }else if (data.weather[0].main == "Mist"){
            image.src = "images/mist.png";
        }else if (data.weather[0].main == "Clouds") {
            image.src  = "images/clouds.png";
        }else if (data.weather[0].main == "Drizzle") {
            image.src  = "images/drizzle.png";
        }else if (data.weather[0].main == "Snow") {
            image.src  = "images/snow.png";
        }

   
        document.querySelector(".content").style.display = "block";

    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'City Not Found',
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#fefefe',
        });
        document.querySelector(".content").style.display = "none";
    
    }
}

searchButton.addEventListener("click" , () => {
    checkWeather(searchInput.value)
})

