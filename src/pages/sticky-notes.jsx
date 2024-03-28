// import React, { useState } from "react";
// import StickyContainer from "../components/stickycontainer";

// const StickyNotes = () => {
//   const [notes, setNotes] = useState([]);
//   const [id, setId] = useState(0);
//   const [newNote, setNewNote] = useState("");

//   const addNote = () => {
//     if (newNote.length !== 0) {
//       setNotes([...notes, { id: id, text: newNote }]);
//       setId(id + 1);
//       setNewNote("");
//     }
//   };

//   const deleteNote = (id) => {
//     setNotes(notes.filter((note) => note.id !== id));
//   };

//   const editNote = (id, newText) => {
//     setNotes(
//       notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
//     );
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Add new note"
//         value={newNote}
//         onChange={(e) => setNewNote(e.target.value)}
//       />
//       <button onClick={addNote}>Add Note</button>
//       <div>
//         {notes.map((note) => (
//           <StickyContainer
//             key={note.id}
//             id={note.id}
//             text={note.text}
//             deleteNote={deleteNote}
//             editNote={editNote}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StickyNotes;
