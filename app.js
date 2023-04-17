const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const https = require("https")

app.use(bodyParser.urlencoded({extended: true}))

// This allows me to access my static files in the "public" folder:
app.use(express.static("public"))

//When you get a Get request to the "/" root directory send this html file
app.get("/", function(req, res){
    res.sendFile( __dirname + "/index.html")
})


// app.post("/", function(req, res){

//     const query = req.body.cityName;
//     const apiKey = "1e2744f54600c98b66019bd3c92053f6";
//     const units = "metric";
//     const url =
//       "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + apiKey + "";
    
//     https.get(url, function(response){
//           console.log(response.statusCode);
  
//           response.on("data", function(data){
//               const weatherData = JSON.parse(data);
//               const temp = weatherData.main.temp;
//               const description = weatherData.weather[0].description;
//               const iconName = weatherData.weather[0].icon;
//               const iconUrl = "https://openweathermap.org/img/wn/" + iconName + "@2x.png";
//               const minTemp = weatherData.main.temp_min
//               const maxTemp = weatherData.main.temp_max
//               const humidity = weatherData.main.humidity
//               res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius</h1>");
//               res.write("<h2>and the weather is displaying " + description + ". </h2>");
//               res.write("<div> <img src=" + iconUrl +"> </div>");
  
//               console.log(temp)
//               console.log(description)
//               console.log(iconUrl)
//               console.log(minTemp)
//               console.log(maxTemp)
//               console.log(humidity)
//           })
//      });

//   });

// Use Express to listen to process.env.PORT on production or to the port 3000 in your local environment:
app.listen(process.env.PORT || 3000, function(){
    console.log("Listening to Port 3000!")
})
