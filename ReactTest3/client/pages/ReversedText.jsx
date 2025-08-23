import React from "react";

function ReversedText() {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const reversedText = text.split("").reverse().join("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text here"
      />
      <p>Original: {text}</p>
      <p>Reversed: {reversedText}</p>
    </div>
  );
}

export default ReversedText;
