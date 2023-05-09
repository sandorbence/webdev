const express = require("express");
const app = express();
const https = require("https");

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=370dafc785c3ea5d7f173e0f5dce3e53&units=metric";
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            console.log(temp);
        });
    });
    res.send("asd");
});

app.listen("3000", function () {
    console.log("Server is running on port 3000.");
});