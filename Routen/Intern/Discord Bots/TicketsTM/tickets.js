// Datei Einstellungen
const express = require("express");
const editJSON = require("edit-json-file");
const fs = require("fs");
// Router Einstellungen
const router = express.Router();
// Datenbank Einstellungen
const SERVER = editJSON("Daten/Discord/Bots/TicketsTM/Server/server.json");
const USER = editJSON("Daten/Discord/Bots/TicketsTM/User/user.json");
const TICKETS = editJSON("Daten/Discord/Bots/TicketsTM/Tickets/tickets.json");
const LEVEL3 = editJSON("Daten/Keys/level-3.json");
// Routen
router.get(`/server/get/:id`, (req, res) => {
    if (LEVEL3.get(req.headers["authorization"]) != undefined) {
        if (SERVER.get(String(req.params.id)) != undefined) {
            res.status(200).json(SERVER.get(String(req.params.id)));
        } else {
            res.status(404).json(
                {
                    code: 404,
                    message: "Server was not found!"
                }
            )
        }
    } else {
        res.status(401).json(
            {
                code: 401,
                message: "Unauthorized"
            }
        )
    }
});
router.get("/tickets/get/:id/:name", (req, res) => {
    if (LEVEL3.get(req.headers["authorization"]) != undefined) {
        if (TICKETS.get(`${String(req.params.id)}.${String(req.params.name)}`) != undefined) {
            res.status(200).json(TICKETS.get(`${String(req.params.id)}.${String(req.params.name)}`));
        } else {
            res.status(404).json(
                {
                    code: 404,
                    message: `Ticket with name ${String(req.params.name)} does not exist!`
                }
            )
        }
    } else {
        res.status(401).json(
            {
                code: 401,
                message: "Unauthorized"
            }
        )
    }
});
router.post("/tickets/new/:id/:name", (req, res) => {
    if (LEVEL3.get(req.headers["authorization"]) != undefined) {
        if (TICKETS.get(`${String(req.params.id)}.${String(req.params.name)}`) == undefined) {
            TICKETS.set(`${String(req.params.id)}.${String(req.params.name)}`, 
                {
                    server: req.params.id,
                    ticket_client_name: req.params.name,
                    ticket_info: {
                        embed_title: req.body.embed.title
                    }
                }
            );
            TICKETS.save();
        } else {
            res.status(200).json(
                {
                    code: 200,
                    message: "The ressource you wanted to create is existing already"
                }
            )
        }
    } else {
        res.status(401).json(
            {
                code: 401,
                message: "Unauthorized"
            }
        )
    }
});
// Exports
module.exports = router;