var entry = document.getElementById("entry");
var saveButton = document.getElementById("save");

var clear = document.getElementById("reset");



var button1 = document.getElementById("mButton")
var button2 = document.getElementById("tuButton")
var button3 = document.getElementById("wButton")
var button4 = document.getElementById("thButton")
var button5 = document.getElementById("fButton")
var button6 = document.getElementById("saButton")
var button7 = document.getElementById("suButton")


console.log(saveButton)
console.log(clear)

function randomFact() {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    fetch(factUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var MondayFact = document.getElementById('MondayFact');
        var TuesdayFact = document.getElementById('TuesdayFact');
        var WednesdayFact = document.getElementById('WednesdayFact');
        var ThursdayFact = document.getElementById('ThursdayFact');
        var FridayFact = document.getElementById('FridayFact');
        var SaturdayFact = document.getElementById('SaturdayFact');
        var SundayFact = document.getElementById('SundayFact');

        MondayFact.textContent = data.text
        TuesdayFact.textContent = data.text
        WednesdayFact.textContent = data.text
        ThursdayFact.textContent = data.text
        FridayFact.textContent = data.text
        SaturdayFact.textContent = data.text
        SundayFact.textContent = data.text
        console.log(data.text)
    })
    console.log('Hello')
    
    

}



button1.addEventListener("click", function(event) {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    var mFact = document.createElement("p")
    fetch(factUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        mFact.textContent = data.text
    })
    
    mButton.remove()

    

   
    
    document.getElementById("monday").appendChild(mFact);
});









clear.addEventListener("click", function(event){
console.log(clear)
event.preventDefault();
localStorage.clear();

entry.value = "";


});


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

