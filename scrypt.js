const apiKey = '1054b399d77443d47ddc480bd27ddd8a'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric'

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const errorMsg = document.querySelector('.error')
const weatherData = document.querySelector('.weather')

// Our main function
async function checkWeather(city) {
	// Looking for a specific API Url
	const res = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`)
	// Saving the response from server
	var data = await res.json()

	console.log(data)

	//Checking if the city is not found
	if (res.status == 404) {
		errorMsg.style.display = 'block'
		weatherData.style.display = 'none'
	} else {
		errorMsg.style.display = 'none'
		weatherData.style.display = 'block'

		// Displaying the data
		document.querySelector('.city').innerHTML = data.name
		document.querySelector('.temp').innerHTML =
			Math.round(data.main.temp) + '&deg;C'
		document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
		document.querySelector('.wind').innerHTML = data.wind.speed + 'm/s'

		if (data.weather[0].main == 'Clouds') {
			weatherIcon.src = './images/clouds.png'
		} else if (data.weather[0].main == 'Clear') {
			weatherIcon.src = './images/clear.png'
		} else if (data.weather[0].main == 'Rain') {
			weatherIcon.src = './images/rain.png'
		} else if (data.weather[0].main == 'Drizzle') {
			weatherIcon.src = './images/drizzle.png'
		} else if (data.weather[0].main == 'Mist') {
			weatherIcon.src = './images/mist.png'
		} else if (data.weather[0].main == 'Snow') {
			weatherIcon.src = './images/snow.png'
		} else {
			weatherIcon.src = ''
		}
	}
}

// Adding event listener to the search button
searchBtn.addEventListener('click', () => {
	checkWeather(searchBox.value)
})
