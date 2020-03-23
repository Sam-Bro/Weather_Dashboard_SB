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
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&units=metric&appid=5c646586befaee69363c2a97ded52005",
        dataType: "json",
        success: function (data) {

            for (i = 0; i < 40; i += 8) {
                var date = data.list[i].dt_txt;
                var temp = data.list[i].main.temp;
                var name = data.city.name;
                var windspeed = data.list[i].wind.speed;
                var humidity = data.list[i].main.humidity;

                var weatherTemp = "#weather-name-card" + i;
                var weatherName = "#weather-temp-card" + i;
                var weatherDate = "#weather-date-card" + i;
                var weatherWindspeed = "#weather-windspeed-card" + i;
                var weatherHumidity = "#weather-humidity-card" + i;

                $(weatherName).append(name);
                $(weatherTemp).append("temperature: " + temp + " °C");
                $(weatherDate).append(date);
                $(weatherWindspeed).append("Windspeed: " + windspeed);
                $(weatherHumidity).append("Humidity: " + humidity);
                console.log("run");

            }



        }
    })
}




        //create history links for search
        // if (history.indexOf(searchValue) === -1) {
        //     history.pushState(searchValue);
        //     window.localStorage.setItem("history", JSON.stringify(searchValue))

        //     makeRow(searchValue);
        // }

        //clear any old content
        //$("#today").empty();

        // //create hmtl content for current weather
        // var title = $("<h3>")
        // //.addClass("card-title")
        // .text(data.name + " (" + new Date().toLocaleDateString)
        // var card = $("<div>").addClass("card");