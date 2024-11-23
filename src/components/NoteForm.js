import React, { useState } from "react";
import axios from "axios";

const NoteForm = ({ currentNote, onSave }) => {
  const [form, setForm] = useState(currentNote || { title: "", description: "", category: "Others" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form._id) {
      axios.put(`${API_BASE_URL}/${form._id}`, form).then(onSave);
    } else {
      axios.post(API_BASE_URL, form).then(onSave);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
      <button type="submit">{form._id ? "Update" : "Add"}</button>
    </form>
  );
};

export default NoteForm;
