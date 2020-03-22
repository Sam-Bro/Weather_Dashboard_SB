var searchBtn = document.getElementById("search-btn");
var mainCol = document.getElementById("main-col");

searchBtn.addEventListener("click", function() {
    var searchValue = document.getElementById("city-search").value;
    searchWeather(searchValue)
    console.log("search value: " + searchValue);
})
//search weather function
function searchWeather(searchValue) {
    var searchValue = document.getElementById("city-search").value;
    $.ajax ({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=5c646586befaee69363c2a97ded52005",
        dataType: "json",
        success: function(data) {
        var temp = data.list[0].main.temp - 273.15;
        var name = data.city.name;

        $("#weather-name").append(name);
        $("#weather-temp").append("temperature: " + temp + " °C");
        }
    })
}




        // //create history links for search
        // // if (history.indexOf(searchValue) === -1) {
        // //     history.pushState(searchValue);
        // //     window.localStorage.setItem("history", JSON.stringify(searchValue))

        // //     makeRow(searchValue);
        // // }

        // //clear any old content
        // //$("#today").empty();

        // //create hmtl content for current weather
        // var title = $("<h3>")
        // //.addClass("card-title")
        // .text(data.name + " (" + new Date().toLocaleDateString)
        // var card = $("<div>").addClass("card");