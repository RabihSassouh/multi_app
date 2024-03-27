import React, { useState } from "react";

const StickyNotes=()=>{
    const [notes,setNotes]=useState([]);
    const [id,setId]=useState(0);

    const addNote=()=>{
        setNotes([...notes,{id:id,text:''}]);
        setId(id ++);
    };

    return(
        <div>
            <input type="text" placeholder="Add new note" />
            <button onClick={addNote}>Add Note</button>
            <div>
                {notes.map((note)=>(
                    <div>
                        id={note.id}
                        text={note.text}

                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default StickyNotes;