// Datei Einstellungen
const express = require("express");
const editJSON = require("edit-json-file");
const fs = require("fs");
// Router Einstellungen
const router = express.Router();
// Datenbank Einstellungen
const USER = editJSON("Daten/Discord/Bots/User/user.json");
// Routen
router.post("/users/new/:id/:token", (req, res) => {
    if (USER.get(String(req.params.id)) != undefined) {
        res.status(403).json({
            code: 403,
            message: "User already exists"
        })
    } else {
        fetch("discord.com/api/v10/users/@me", {method: "GET", headers: { Authorization: `Bearer ${req.params.token}`}})
        .then(res => {
            if (res.status == 200) {
                return res.json();
            } else {
                res.status(401).json({
                    code: 401,
                    message: "Error, discord-wise"
                })
            }
        })
        .then(data => {
            console.log(data)
            USER.set(String(req.params.id), data);
            USER.set(`${String(req.params.id)}.token`, String(req.params.token));
            USER.save();
            res.status(200).json({
                code: 200,
                message: "User set!"
            })
        })
    }
})
// Exports
module.exports = router