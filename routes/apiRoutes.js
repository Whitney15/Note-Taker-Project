const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

// API route get request 
router.get('/notes', function (req, res) {
    const data = fs.readFileSync("./db/db.json");
    res.json(JSON.parse(data));
});


// "./develop/db/db.json"

// API route post request 
router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = {
        title: req.body.title,
        text: req.body.text,
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;