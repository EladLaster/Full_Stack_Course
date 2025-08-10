export function Conversation({ convo, sender, goBack }) {
  return (
    <div>
      <button className="back" onClick={goBack}>Back</button>
      {convo.map((message, idx) => (
        <div key={idx}>
          <span className="sender">
            {message.sender === "self" ? <strong>Me: </strong> : <strong>{sender} </strong>}
          </span>: {message.text}
        </div>
      ))}
    </div>
  );
}
