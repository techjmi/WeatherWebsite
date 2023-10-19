const express = require("express");
const path = require("path");
const app = express();
const hbs=require("hbs")
const port = 8001;

//template
const viewsPath = path.join(__dirname, '..',"template", 'views');
app.set("views", viewsPath);
app.set("view engine", "hbs");

// public folder path
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

//partail....
const partialPath=path.join(__dirname, '..',"template", 'partial');
hbs.registerPartials(partialPath)
//Routing
app.get("/home", (req, res) => {
  res.render("index.hbs",{ weatherText: "Md Shamim"});
});

app.get("/about", (req, res) => {
  res.render("about.hbs",{ weatherText: "Md Shamim"});
});
app.get("/conatc", (req, res) => {
  res.sender("this is about")
});
app.get("/weather", (req, res) => {
  res.render("weather.hbs", { weatherText: "Weather In Your City" });
});


app.get("*", (req, res) => {
  res.render("error" , { weatherText: "Md Shamim " });
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
