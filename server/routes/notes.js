const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET /notes - Get all notes (sorted by createdAt in descending order)
router.get('/', async (req, res) => {
  try {
    console.log("Fetching notes");
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /notes - Create a new note
router.post('/', async (req, res) => {
  try {
    console.log("Creating note");
    const { title, content } = req.body;
    const newNote = new Note({
      title,
      content
    });
    
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /notes/:id - Delete a note
router.delete('/:id', async (req, res) => {
  try {
    console.log("Deleting note");
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      res.status(404).json({ message: 'Note not found' });
      return;
    }
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 