import { useState } from "react";
import "./App.css";

function App() {
  const [titleText, setTitleText] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  function send(){

    if (text.trim() === "") 
      return;

    const newNote = {
    titleText,
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
    setTitleText("");
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
      <input
        placeholder="title..."
        value={titleText}
        onChange={(e) => setTitleText(e.target.value)}
      >
      </input>
      <textarea className="textArea"
        rows="10"
        cols="50"
        placeholder="write her..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      ></textarea>
      <br></br>
      <button className="send-button" onClick={send}>Add</button>
    </div>

      {notes.length > 0 && (
        <div className="notes-grid">
          {notes.map((note, index) => (
            <div key={index}className="note-card">
              <button onClick= {()=>deleteMe(index)}>x</button>
              <small>{note.date}</small>
              {note.titleText && <h3>{note.titleText}</h3>}
              <h4>{note.text}</h4>
            </div>
          ))}
        </div>
      )}
      
    </>
  );
}

export default App;
