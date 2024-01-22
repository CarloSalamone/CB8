import { useState } from "react";

const NewRequest = ({ setRecipesRequest }) => {
  const [inputText, setInputText] = useState("");

  const onInputChange = (e) => setInputText(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setRecipesRequest((prev) => [...prev, inputText]);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={onInputChange}
        placeholder="Richiedi la ricetta"
      />
      <input type="submit" value="Richiedi" />
    </form>
  );
};

export default NewRequest;
