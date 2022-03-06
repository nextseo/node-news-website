const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 5000;


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
const indexRouter = require("./src/router/index");
const weatherRouter = require("./src/router/weather");
// const sitemapRouter = require("./src/router/sitemap");

app.use("/", indexRouter);
app.use("/weather", weatherRouter);
// app.use("/sitemap.xml", sitemapRouter);

//sitemap
app.get('/sitemap.xml', function(req, res) {
  // res.sendFile(path.join(__dirname,'src/views', 'sitemap.xml'));
  res.sendFile('./src/views/sitemap.xml', { root: __dirname });
});

// Listen
app.listen(PORT, () => {
  console.log("SERVER RUNNING IS 5000");
});
