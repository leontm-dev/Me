// Datei Einstellungen
const express = require("express");
const app = express();
const env = require("dotenv");
const cors = require("cors");
const fs = require("fs");
// App Einstellungen
app.listen(2000, () => {
    fs.readFile("./console.txt", function(err, data) {
        console.log(String(data));
    });
});
app.use(cors({origin: "*"}))
// Seiten Routen

// API Routen

// Intern Routen