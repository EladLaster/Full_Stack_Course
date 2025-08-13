import { useRef, useState } from "react";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  const [titleText, setTitleText] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  const textAreaRef = useRef(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const openModal = (note) => {
    setSelectedNote(note);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedNote(null);
  };

  function send() {
    if (text.trim() === "") return;

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

    setNotes((prev) => [...prev, newNote]);
    setText("");
    setTitleText("");
  }

  const handleTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      textAreaRef.current.focus();
    }
  };

  const handleTextKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const deleteMe = (index) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your note?"
    );
    if (confirmed) {
      setNotes((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <div className="container">
        <input
          placeholder="title..."
          value={titleText}
          onChange={(e) => setTitleText(e.target.value)}
          onKeyDown={handleTitleKeyDown}
        />
        <textarea
          className="textArea"
          rows="10"
          cols="50"
          placeholder="write here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleTextKeyDown}
          ref={textAreaRef}
        ></textarea>
        <br />
        <button className="send-button" onClick={send}>
          Add
        </button>
      </div>

      {notes.length > 0 && (
        <div className="notes-grid">
          {notes.map((note, index) => (
            <div
              key={index}
              className="note-card"
              onClick={() => openModal(note)}
            >
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteMe(index);
                }}
              >
                x
              </button>
              <small>{note.date}</small>
              {note.titleText && <h3>{note.titleText}</h3>}
              <h4>{note.text}</h4>
            </div>
          ))}
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Note Modal"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        {selectedNote && (
          <div className="modal-content">
            <button className="modal-close-button" onClick={closeModal}>
              x
            </button>
            <h2>{selectedNote.titleText}</h2>
            <p>{selectedNote.text}</p>
            <small>{selectedNote.date}</small>
          </div>
        )}
      </Modal>
    </>
  );
}

export default App;
