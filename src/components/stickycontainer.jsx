import React, { useState } from "react";

import ("../styles/sticky-notes.css");

const StickyContainer = ({ id, text, deleteNote, editNote }) => {
  const [editing, setEditing] = useState(false);
  const [edited, setEdited] = useState(text);

  const handleDelete = () => {
    deleteNote(id);
  };
  const handleEdit = () => {
    setEditing(true);
  };
  const handleSave = () => {
    editNote(id, edited);
    setEditing(false);
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
      <div className="note-container">
        <p>{text}</p>

        <button onClick={handleEdit} className="edit-button">Edit</button>
        <button onClick={handleDelete} className="delete-button">Delete</button>
      </div>
      {editing && (
        <div className="edit-container">
          <textarea
            value={edited}
            onChange={(e) => setEdited(e.target.value)}
            className="edit-text"
          />
          <button onClick={handleSave} className="save-button">Save</button>
        </div>
      )}
    </div>
  );
};

export default StickyContainer;
