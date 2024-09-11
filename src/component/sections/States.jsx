import React, { useState } from "react";
import { Input } from "yashwant-component";

const States = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>States</h2>
      
      {/* Default */}
      <div className="input-section">
        <h3>Default:</h3>
        <Input
          type="text"
          id="textInput"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="normal"
          state="default"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Hover */}
      <div className="input-section">
        <h3>Hover:</h3>
        <Input
          type="text"
          id="textInputHover"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="normal"
          state="hover"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Focus */}
      <div className="input-section">
        <h3>Focus:</h3>
        <Input
          type="text"
          id="textInputFocus"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="normal"
          state="focus"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Disabled */}
      <div className="input-section">
        <h3>Disabled:</h3>
        <Input
          type="text"
          id="textInputDisabled"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="normal"
          state="disabled"
          disabled
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Read-Only */}
      <div className="input-section">
        <h3>Read-Only:</h3>
        <Input
          type="text"
          id="textInputReadOnly"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="normal"
          state="readonly"
          readOnly
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Error */}
      <div className="input-section">
        <h3>Error:</h3>
        <Input
          type="text"
          id="textInputError"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="normal"
          state="error"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Success */}
      <div className="input-section">
        <h3>Success:</h3>
        <Input
          type="text"
          id="textInputSuccess"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="normal"
          state="success"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Loading */}
      <div className="input-section">
        <h3>Loading:</h3>
        <Input
          type="text"
          id="textInputLoading"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="normal"
          state="loading"
        />
        <p>Current Value: {inputValue}</p>
      </div>
    </div>
  );
};

export default States;