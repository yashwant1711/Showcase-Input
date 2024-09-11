import React, { useState } from "react";
import { Input } from "yashwant-component";

const Variations = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Variations</h2>
      
      {/* Normal (Default) Input */}
      <div className="input-section">
        <h3>Normal (Default) Input</h3>
        <Input
          type="text"
          id="textInput"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="default"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Floating Label */}
      <div className="input-section">
        <h3>Floating Label</h3>
        <Input
          type="text"
          id="textInput"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="floating"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Outlined Input */}
      <div className="input-section">
        <h3>Outlined Input</h3>
        <Input
          type="text"
          id="textInput"
          label="Text Input (Error)"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="outlined"
          state="error"
        />
        <Input
          type="text"
          id="textInput"
          label="Text Input (Success)"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="outlined"
          state="success"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Filled Input */}
      <div className="input-section">
        <h3>Filled Input</h3>
        <Input
          type="text"
          id="textInput"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="filled"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Underlined Input */}
      <div className="input-section">
        <h3>Underlined Input</h3>
        <Input
          type="text"
          id="textInput"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="underlined"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Rounded Input */}
      <div className="input-section">
        <h3>Rounded Input</h3>
        <Input
          type="text"
          id="textInput"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="rounded"
        />
        <p>Current Value: {inputValue}</p>
      </div>
    </div>
  );
};

export default Variations;