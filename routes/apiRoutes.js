const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

// API route get request 
router.get('/notes', function (req, res) {
    fs.readFile("./db/db.json", "utf-8", function(error, data){
        if(error)throw error
        console.log(typeof(data))
        res.json(JSON.parse(data));
    });
   
});


// "./develop/db/db.json"

// API route post request 
router.post('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = {
        title: req.body.title,
        text: req.body.text,
    }
    // calling old notes then pushing newNotes into the original Array notes.push(newNotes);
    notes.push(newNotes); 
    // overwriting the file with the new data to the old file
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;