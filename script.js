var searchBtn = document.getElementById("search-btn");
var mainCol = document.getElementById("main-col");

searchBtn.addEventListener("click", function () {
    var searchValue = document.getElementById("city-search").value;
    searchWeather(searchValue)
    console.log("search value: " + searchValue);
})
//search weather function
function searchWeather(searchValue) {
    var searchValue = document.getElementById("city-search").value;
    clearDay()
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&units=metric&appid=5c646586befaee69363c2a97ded52005",
        dataType: "json",
        success: function (data) {
            setLocal(searchValue)
            for (i = 0; i < 40; i += 8) {
                var date = data.list[i].dt_txt;
                var temp = data.list[i].main.temp;
                var name = data.city.name;
                var windspeed = data.list[i].wind.speed;
                var humidity = data.list[i].main.humidity;

                var weatherTemp = "#weather-temp-card" + i;
                var weatherName = "#weather-name-card" + i;
                var weatherDate = "#weather-date-card" + i;
                var weatherWindspeed = "#weather-windspeed-card" + i;
                var weatherHumidity = "#weather-humidity-card" + i;

                $(weatherName).append(name);
                $(weatherTemp).append(temp + " °C");
                $(weatherDate).append(date);
                $(weatherWindspeed).append(windspeed + " MPH");
                $(weatherHumidity).append(+ humidity + "%");

            }
            //get weather min and max temps
            var tempMax = data.list[0].main.temp_max;
            var tempMin = data.list[0].main.temp_min;

            $("#weather-max").append(tempMax + " °C");
            $("#weather-min").append(tempMin + " °C");
        }
        
    })
}
// save links to local
function setLocal(searchValue) {
    localStorage.setItem(searchValue, searchValue);
    saveSearch(searchValue)
}

// clear button
var clearBtn = document.getElementById("btn-clear");

clearBtn.addEventListener("click", function () {
    clearDay()
    localStorage.clear();
})
function clearDay() {
    $(".today-return").empty();
}
//search history
function saveSearch(searchValue) {
    var a = document.createElement("a");
    var newDiv = document.createElement("div");
    var historyText = document.createTextNode(searchValue);
    var searchHistory = document.getElementById("search-history");


    a.appendChild(historyText);
    a.classList.add("history-style");
    newDiv.classList.add("div-padding")
    a.title = "my title text";
    a.href = "#";
    newDiv.appendChild(a);
    searchHistory.appendChild(newDiv);
}
// create history links from search
function loadHistory() {
    for (i = 0; i < localStorage.length; i++) {
        var history = localStorage.key(i)

        var a = document.createElement("a");
        var newDiv = document.createElement("div");
        var historyText = document.createTextNode(history);
        var searchHistory = document.getElementById("search-history");


        a.appendChild(historyText);
        a.classList.add("history-style");
        newDiv.classList.add("div-padding")
        a.title = i;
        a.href = "#";
        newDiv.appendChild(a);
        searchHistory.appendChild(newDiv);

        console.log(history);
    }
}
loadHistory()

//call from search history
$(".history-style").on("click", historyLinks)


function historyLinks() {
    var historyClass = document.getElementsByClassName("history-style");
    var linkNumber = parseInt(this.title);
    var historyVal = historyClass[linkNumber].text;


    searchWeather(historyVal)
    console.log("search value: " + historyVal);
}




