import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  function send(){

    if (text.trim() === "") 
      return;

    const newNote = {
    text,
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
  };


    setNotes(prev => [...prev, newNote]);
    setText("");
  }

  function handleKeyDown(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    send();
  }
  }

  function deleteMe(index) {
  const confirmed = window.confirm("Are you sure you want to delete your note?");
  if (confirmed) {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  }
}

  return (
    <>
    <div className="container">
      <textarea
        rows="10"
        cols="50"
        placeholder="write her..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      <br></br>
      <button className="send-button" onClick={send}>Add</button>

      {notes.length > 0 && (
        <div className="notes-grid">
          {notes.map((note, index) => (
            <div key={index}className="note-card">
              <button onClick= {()=>deleteMe(index)}>x</button>
              <p>{note.text}</p>
              <small>{note.date}</small>
            </div>
          ))}
        </div>
      )}
      </div>
    </>
  );
}

export default App;
