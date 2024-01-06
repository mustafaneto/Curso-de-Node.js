const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const formRoutes = require("./routes/form");
const usersData = require("./routes/users");

app.use(bodyParser.urlencoded({extended: false}));

app.use(formRoutes);
app.use(usersData.routes);

app.use((req, res, next) => {
    res.render("404", {pageTitle:"Page Not Found"});
});

app.listen(3000);