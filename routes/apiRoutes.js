const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");

// API route get request 
router.get('/api/notes', function (req, res) {
    const data = fs.readFileSync('./Develop/db/db.json');
    res.json(JSON.parse(data));
});


   

// API route post request 
router.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./Develop/db/db.json'));
    // const newNotes = {req.body;
    // newNotes.id = uuid.uuidv4();
    // notes.push(newNotes);}
    const newNotes = {
        title: req.body.title,
        text: req.body.text,
    }
    fs.writerFileSync('./Develop/db/db.json', JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;