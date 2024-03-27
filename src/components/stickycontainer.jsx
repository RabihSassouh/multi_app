import React, { useState } from "react";

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
    setEdited(id, edited);
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
      <div>
        <p>{text}</p>

        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {editing && (
        <div>
          <textarea
            value={edited}
            onChange={(e) => setEdited(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default StickyContainer;
