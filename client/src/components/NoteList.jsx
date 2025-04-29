import React from 'react';
import Note from './Note';

function NoteList({ notes, onDeleteNote }) {
  const notesList = Array.isArray(notes) ? notes : [];
  
  if (notesList.length === 0) {
    return (
      <div className="text-center p-4 bg-light rounded">
        <p className="mb-0 text-muted">No notes yet. Add your first note above!</p>
      </div>
    );
  }

  return (
    <div className="note-list">
      <h2 className="mb-3">Your Notes</h2>
      <div className="d-flex flex-column">
        {notesList.map((note) => (
          <div className="mb-3" key={note._id}>
            <Note 
              note={note} 
              onDelete={onDeleteNote} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList; 