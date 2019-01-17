import React from 'react';
import Note from '../Note/Note';

const NoteList = ({ notes = [], fetchDeleteNote, fetchToggleNote }) =>
  console.log(notes) || (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 1440,
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '0 16px',
        marginTop: 32,
      }}
    >
      {notes.map(note => (
        <Note
          key={note.id}
          {...note}
          onDelete={() => fetchDeleteNote(note.id)}
          onToggle={() => fetchToggleNote(note.id, note)}
        />
      ))}
    </div>
  );

export default NoteList;
