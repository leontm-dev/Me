// Datei Einstellungen
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const path = require("path");
const fs = require("fs");

// Routen
router.get("/", (req, res) => {
    res.render("Index/start");
});
router.get("/folie=:folie", (req, res) => {
    if (fs.existsSync(`/Seiten/views/Index/folie${req.params.folie}.ejs`)) {
        res.render(`folie${req.params.folie}`);
    } else {
        res.render("404");
    }
});
router.get("/games", (req, res) => {
    res.render("Games/start");
});
router.get("/imprint", (req, res) => {
    res.render("imprint");
});
router.get("/datenschutz", (req, res) => {
    res.render("datenschutz");
});
// Exports
module.exports = router;