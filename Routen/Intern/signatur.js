// Datei Einstellungen
const express = require("express");
const editJSON = require("edit-json-file");
const fs = require("fs");
// Router Einstellungen
const router = express.Router();
// Datenbank Einstellungen
const LEVEL3 = editJSON("Daten/Keys/level-3.json");
// Routen
router.get("/", (req, res) => {
    if (req.headers["authorization"] != "") {
        if (LEVEL3.get(req.headers["authorization"]) != undefined) {
            res.status(200).write(function () {
                    fs.readFile("./Daten/Signatur/signatur.txt", (err, data) => {
                        return String(data)
                    });
                }
            )
        } else {
            res.status(401).json(
                {
                    code: 401,
                    message: "Unauthorized"
                }
            );
        }
    } else {
        res.status(401).json(
            {
                code: 401,
                message: "Unauthorized"
            }
        );
    };
});
// Exports
module.exports = router;