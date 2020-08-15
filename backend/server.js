var io = require("socket.io");
var http = require("http");
const axios = require("axios");

//Create Server
var app = http.createServer();
var io = io.listen(app);
app.listen(5000);
//Connect Socket.io
io.sockets.on("connection", (socket) => {
  socket.on("location", async (data) => {
    let city = null;
    //Get City Data
    try {
      const response = await axios.get(data.url);
      city = response.data;
    } catch (error) {
      return console.log(error);
    }
    // Get this City Weather
    let weather = await Promise.all(
      city.map(async (el) => {
        let weatherResponse = await axios.get(
          `https://www.metaweather.com/api/location/${el.woeid}`
        );
        return weatherResponse.data.consolidated_weather;
      })
    ).catch((err) => console.log(err));

    //Send data Clinet with socket.io
    socket.emit("location", {
      city: city,
      wather: weather,
    });
  });
  //Disconnect Clinet
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
