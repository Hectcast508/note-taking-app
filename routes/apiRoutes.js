const router = require('express').Router();
const { notes } = require('../db/db.json');
const { uniqueId, createNewNote } = require('../lib/notes');

router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

router.post('/notes', (req, res) => {
  req.body.id = uniqueId();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;