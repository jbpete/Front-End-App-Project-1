//Calling text areas and basic buttons
var entry = document.getElementById("entry");
var saveButton = document.getElementById("save");
var clear = document.getElementById("reset");

//Fact Button
var button1 = document.getElementById("mButton")
var button2 = document.getElementById("tuButton")
var button3 = document.getElementById("wButton")
var button4 = document.getElementById("thButton")
var button5 = document.getElementById("fButton")
var button6 = document.getElementById("saButton")
var button7 = document.getElementById("suButton")


if (localStorage.journal1 == null) {
    entry.value = ""
}

if (localStorage.journal2 == null) {
    entry2.value = ""
}

if (localStorage.journal3 == null) {
    entry3.value = ""
}

if (localStorage.journal4 == null) {
    entry4.value = ""
}

if (localStorage.journal5 == null) {
    entry5.value = ""
}

if (localStorage.journal6 == null) {
    entry6.value = ""
}

if (localStorage.journal7 == null) {
    entry7.value = ""
}


document.getElementById("entry").innerHTML = localStorage.journal1;
document.getElementById("entry2").innerHTML = localStorage.journal2;
document.getElementById("entry3").innerHTML = localStorage.journal3;
document.getElementById("entry4").innerHTML = localStorage.journal4;
document.getElementById("entry5").innerHTML = localStorage.journal5;
document.getElementById("entry6").innerHTML = localStorage.journal6;
document.getElementById("entry7").innerHTML = localStorage.journal7;

//ask eric about empty p tags!
button1.addEventListener("click", function(event) {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    var mFact = document.createElement("p")
    mFact.setAttribute("style", "margin-left:40px; margin-top:10px;")
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

button2.addEventListener("click", function(event) {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    var tuFact = document.createElement("p")
    tuFact.setAttribute("style", "margin-left:40px; margin-top:10px;")
    fetch(factUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        tuFact.textContent = data.text
    })
    
    tuButton.remove()
    document.getElementById("tuesday").appendChild(tuFact);
});

button3.addEventListener("click", function(event) {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    var wFact = document.createElement("p")
    wFact.setAttribute("style", "margin-left:40px; margin-top:10px;")
    fetch(factUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        wFact.textContent = data.text
    })
    
    wButton.remove()
    document.getElementById("wednesday").appendChild(wFact);
});

button4.addEventListener("click", function(event) {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    var thFact = document.createElement("p")
    thFact.setAttribute("style", "margin-left:40px; margin-top:10px;");
    fetch(factUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        thFact.textContent = data.text
    })
    
    thButton.remove()
    document.getElementById("thursday").appendChild(thFact);
});

button5.addEventListener("click", function(event) {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    var fFact = document.createElement("p")
    fFact.setAttribute("style", "margin-left:40px; margin-top:10px;")
    fetch(factUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        fFact.textContent = data.text
    })
    
    fButton.remove()
    document.getElementById("friday").appendChild(fFact);
});

button6.addEventListener("click", function(event) {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    var saFact = document.createElement("p")
    saFact.setAttribute("style", "margin-left:40px; margin-top:10px;")
    fetch(factUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        saFact.textContent = data.text
    })
    
    saButton.remove()
    document.getElementById("saturday").appendChild(saFact);
});

button7.addEventListener("click", function(event) {
    var factUrl = 'https://uselessfacts.jsph.pl/api/v2/facts/today'
    var suFact = document.createElement("p")
    suFact.setAttribute("style", "margin-left:40px; margin-top:10px;")
    fetch(factUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        suFact.textContent = data.text
    })
    
    suButton.remove()
    document.getElementById("sunday").appendChild(suFact);
});






clear.addEventListener("click", function(event){
console.log(clear)
event.preventDefault();
localStorage.clear();

entry.value = "";
entry2.value = "";
entry3.value = "";
entry4.value = "";
entry5.value = "";
entry6.value = "";
entry7.value = "";

});


saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var journal1 = entry.value.trim();
    var journal2 = entry2.value.trim();
    var journal3 = entry3.value.trim();
    var journal4 = entry4.value.trim();
    var journal5 = entry5.value.trim();
    var journal6 = entry6.value.trim();
    var journal7 = entry7.value.trim();
6
   


    localStorage.setItem("journal1", journal1);
    localStorage.setItem("journal2", journal2);
    localStorage.setItem("journal3", journal3);
    localStorage.setItem("journal4", journal4);
    localStorage.setItem("journal5", journal5);
    localStorage.setItem("journal6", journal6);
    localStorage.setItem("journal7", journal7);
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

