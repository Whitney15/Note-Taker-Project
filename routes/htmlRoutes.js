const router = require('express').Router();
const path = require('path');

// this route gets the index.html 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// this route gets the notes.html 
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

module.exports = router;

// ./develop/public/notes.html