// Datei Einstellungen
const express = require("express");
const router = express.Router();
const dotenv = require("dotenv").config();
const path = require("path");
const fs = require("fs");

// Routen
router.get("/", (req, res) => {
    res.render("Bots/landing");
});
router.get("/connected", (req, res) => {
    res.render("Bots/connected");
});
// Exports
module.exports = router;