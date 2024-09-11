import React, { useState } from "react";
import { Input } from "yashwant-component";

const AdditionalFeatures = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Additional Features</h2>

      {/* Input with Icon */}
      <div className="input-section">
        <h3>Input with Icon:</h3>
        <Input
          type="text"
          id="iconInput"
          label="Input with Icon"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          }
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Input with Clear Button */}
      <div className="input-section">
        <h3>Input with Clear Button:</h3>
        <Input
          type="text"
          id="clearableInput"
          label="Clearable Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          clearable={true}
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Input with Validation Message */}
      <div className="input-section">
        <h3>Input with Validation Message:</h3>
        <Input
          type="email"
          id="validationInput"
          label="Email Input"
          placeholder="Enter your email..."
          value={inputValue}
          onChange={handleInputChange}
          validationMessage="Please enter a valid email address"
          validationMessageStatus="error"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Input with Prefix and Suffix */}
      <div className="input-section">
        <h3>Input with Prefix and Suffix:</h3>
        <Input
          type="text"
          id="prefixSuffixInput"
          label="Price Input"
          placeholder="Enter price..."
          value={inputValue}
          onChange={handleInputChange}
          prefix="$"
          suffix=".00"
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Input with Character Count */}
      <div className="input-section">
        <h3>Input with Character Count:</h3>
        <Input
          type="text"
          id="characterCountInput"
          label="Limited Input"
          placeholder="Max 50 characters..."
          value={inputValue}
          onChange={handleInputChange}
          characterLimit={50}
          characterCount={true}
        />
        <p>Current Value: {inputValue}</p>
      </div>
    </div>
  );
};

export default AdditionalFeatures;