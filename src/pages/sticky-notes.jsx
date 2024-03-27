import React, { useState } from "react";
import StickyContainer from "../components/stickycontainer";

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [id, setId] = useState(0);

  const addNote = () => {
    setNotes([...notes, { id: id, text: "" }]);
    setId(id + 1);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  return (
    <div>
      <input type="text" placeholder="Add new note" />
      <button onClick={addNote}>Add Note</button>
      <div>
        {notes.map((note) => (
          <StickyContainer
            key={note.id}
            id={note.id}
            text={note.text}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;
