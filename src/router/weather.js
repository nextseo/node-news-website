const express = require("express");
const weatherRouter = express.Router();
const fs = require("fs");
const cityApi = require("../api/weather_city");
const coordinateApi = require("../api/weather_coordinate");

weatherRouter.get("/", (req, res) => {
  fs.readFile("src/api/th-city.json", (err, data) => {
    const listObj = JSON.parse(data);
    if (err) {
      res.status(400).send("Error List not found");
    } else {
      res.status(200).render("work_shop/weather_home", { lists: listObj });
    }
  });
});

weatherRouter.get("/api/coordinate", (req, res) => {
  const longitude = req.query.lon !== "" ? req.query.lon : "0";
  const latitude = req.query.lat !== "" ? req.query.lat : "0";

  if (longitude == null || latitude == null) {
    const err = "Error";
    res.status(400).render("work_shop/weather_notfound", { forcastObj: err });
  } else {
    const resultData = coordinateApi(longitude, latitude)
      .then((result) => {
        const data = result.data;
        res
          .status(200)
          .render("work_shop/weather_forcast", { forcastObj: result.data });
      })
      .catch((err) => {
        res
          .status(400)
          .render("work_shop/weather_notfound", { forcastObj: err });
      });
  }
});

weatherRouter.get("/api/city", (req, res) => {
  const city = req.query.city !== "" ? req.query.city : "Bangkok";
  console.log(city);
  const country = "TH";
  if (city == null || country == null) {
    const err = "Error";
    res
      .status(400)
      .render("work_shop/weather_notfound", { forcastObj: "1111" });
  } else {
    const resultData = cityApi(city, country)
      .then((result) => {
        const data = result.data;
        res
          .status(200)
          .render("work_shop/weather_forcast", { forcastObj: result.data });
      })
      .catch((err) => {
        res
          .status(400)
          .render("work_shop/weather_notfound", { forcastObj: "22222" });
      });
  }
});

module.exports = weatherRouter;
