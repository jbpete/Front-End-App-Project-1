var entry = document.getElementById("entry");
var saveButton = document.getElementById("save");
console.log(saveButton)
saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var journal = {
        entry: entry.value.trim(),

    };


    localStorage.setItem("journal", JSON.stringify(journal));
    console.log("Hello")
});

function weatherApi() {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=f1e9804071ae403822444ebea900347d&units=imperial'
    fetch(weatherUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var weather = document.getElementById('weather');
        var city = document.getElementById('city');
        var temp = document.getElementById('temp');
        var wind = document.getElementById('wind');
        var humidity = document.getElementById('humidity');

        city.textContent = data.name;
        temp.textContent = 'Temp: '+data.main.temp+'°F';
        wind.textContent = 'Wind: '+data.wind.speed+' mph';
        humidity.textContent = 'Humidity: '+data.main.humidity+'%';
    })};
