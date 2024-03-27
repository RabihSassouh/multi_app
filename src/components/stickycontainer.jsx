import React, { useState } from "react";

const StickyContainer = ({ id, text, deleteNote, editNote }) => {
  const [noteText, setNoteText] = useState(text);

  const handleDelete = () => {
    deleteNote(id);
  };
  const handleEdit = () => {
    editNote(id, noteText);
  };
  return (
    <div>
      {/* <div>
        defaultSize={{ width: 200, height: 200 }}
        minWidth={100}
        minHeight={100}
        maxHeight={500}
        maxWidth={500}
      </div> */}
      <div>
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default StickyContainer;
