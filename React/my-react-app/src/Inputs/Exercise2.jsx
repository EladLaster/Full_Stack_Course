import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");
  const [message, setMessage] = useState("");

  const handleFruitChange = (e) => {
    const selectedFruit = e.target.value;
    setFruit(selectedFruit);
    setMessage(`${name} selected ${selectedFruit}`);
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Enter your name"
      />
      <select
        id="select-input"
        onChange={handleFruitChange}
        value={fruit}
      >
        <option value="">-- Select a fruit --</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
        <option value="Mango">Mango</option>
        <option value="Orange">Orange</option>
      </select>

       {message && <p>{message}</p>}

    </div>
  );
};

export default Exercise2;
