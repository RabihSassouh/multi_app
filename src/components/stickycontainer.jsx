import React, { useState } from "react";
import Draggable from "react-draggable";

import "../styles/sticky-notes.css";

const StickyContainer = ({ id, text, deleteNote, editNote, className }) => {
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
    <div className={className}>
      {/* <div>
        defaultSize={{ width: 200, height: 200 }}
        minWidth={100}
        minHeight={100}
        maxHeight={500}
        maxWidth={500}
      </div> */}
      {/* <Draggable  onDrag={handleDrag}>
        {(props) => {
          console.log("Props:", props);
        }}
      </Draggable> */}
      <div className="noteContainer">
        <p>{text}</p>

        <button onClick={handleEdit} className="edit-button">
          Edit
        </button>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
      {editing && (
        <div className="edit-container">
          <textarea
            value={edited}
            onChange={(e) => setEdited(e.target.value)}
            className="edit-text"
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default StickyContainer;
