const express = require("express");

const router = express.Router();

const users = [];

router.get("/users", (req, res, next) => {
    res.render("users", {
        pageTitle: "Users",
        users: users
    });
});

router.post("/users", (req, res, next) => {
    users.push({user: req.body.user});
    res.redirect("/users");
});

exports.routes = router;
exports.users = users;

