import React, { useEffect, useState } from "react";
import axios from "axios";

const NoteList = ({ onEdit }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(API_BASE_URL).then((response) => setNotes(response.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${API_BASE_URL}/${id}`).then(() => {
      setNotes(notes.filter(note => note._id !== id));
    });
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button onClick={() => onEdit(note)}>Edit</button>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
