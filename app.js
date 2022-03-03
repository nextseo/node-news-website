const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

//sitemap

// var sitemap = require('sitemap.xml');
// const test = app.use(sitemap(__dirname + '/sitemap.xml'));

// app.get("/sitemap.xml", (req, res) => {
//   res.send(test)
// });
const fs = require('fs')
app.get("/sitemap.xml", (req, res) => {

  fs.readFile('./sitemap.xml', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
    res.send(data)
  })

});





// Static File
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

// Template Enhine
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// const newsRouter = require('./src/router/news')
const indexRouter = require("./src/router/index");
const weatherRouter = require("./src/router/weather");
// const sitemapRouter = require("./src/router/sitemap");

app.use("/", indexRouter);
app.use("/weather", weatherRouter);
// app.use("/sitemap.xml", sitemapRouter);

// Listen
app.listen(PORT, () => {
  console.log("SERVER RUNNING IS 5000");
});
