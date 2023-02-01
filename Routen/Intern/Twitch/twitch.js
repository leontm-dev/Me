// Datei Einstellungen
const editJSON = require("edit-json-file");
const express = require("express");
const router = express.Router();
const env = require("dotenv").config();

// Datenbanken
const STATS = editJSON(`Daten/Twitch/stats.json`);
// Twitch-API
const APP_TOKEN = process.env["TTV_APP_TOKEN"];
const ID = process.env["TTV_CLIENT_ID"];
const USER_TOKEN = process.env["TTV_USER_TOKEN"];

// Routen
// Live
router.get("/live", (req, res) => {
        fetch("https://api.twitch.tv/helix/streams?user_login=dcx_leontm",
        {
            method: "GET",
            headers: {
                Authorization: APP_TOKEN,
                "Client-Id": ID
            }
        }
    )
    .then(res => {
        if (res.status == 200) {
            return res.json();
        } else {
            STATS.set("Stream-Fehler", res.statusText);
            STATS.save();
        }
    })
    .then(data => {
        if (data.data[0].id != undefined) {
            STATS.set("Twitch-Stream", data);
            STATS.save();
        } else {
            STATS.set("Twitch-Stream", "Nicht live!");
            STATS.save();
        }
    })
    .catch(err => console.log(err));
});

// Prozesse
setInterval(() => {
    // Profil
    fetch("https://api.twitch.tv/helix/users?login=dcx_leontm",
        {
            method: "GET",
            headers: {
                Authorization: APP_TOKEN,
                "Client-Id": ID
            }
        }
    )
    .then(res => {
        if (res.status == 200) {
            return res.json()
        } else {
            STATS.set("Profil-Fehler", res.statusText);
            STATS.save();
        }
    })
    .then(data => {
        if (data.data[0].id != undefined) {
            STATS.set("Twitch-Profil", data);
            STATS.save();
        } else {
            console.log(data);
        }
    });
    // Follower
    fetch("https://api.twitch.tv/helix/users/follows?to_id=534269325",
        {
            method: "GET",
            headers: {
                Authorization: APP_TOKEN,
                "Client-Id": ID
            }
        }
    )
    .then(res => {
        if (res.status == 200) {
            return res.json();
        } else {
            STATS.set("Follower-Fehler", res.statusText);
        }
    })
    .then(data => {
        if (data.total != undefined) {
            STATS.set("Twitch-Follower", data);
            STATS.save();
        } else {
            console.log(data);
        }
    })
}, 120000);

// Exports
module.exports = router;
