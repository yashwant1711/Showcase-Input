import React, { useState } from "react";
import { Input } from "yashwant-component";

const BasicInputs = () => {
  const [inputValue, setInputValue] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  return (
    <div>
      <h2>Basic Inputs</h2>
      
      {/* Text Input */}
      <div className="input-section">
        <h3>Text Input</h3>
        <Input
          type="text"
          id="textInput"
          label="Text Input"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={(e) => handleInputChange(e, setInputValue)}
          variant="default"
          clearable
        />
        <p>Current Value: {inputValue}</p>
      </div>

      {/* Password Input */}
      <div className="input-section">
        <h3>Password Input</h3>
        <Input
          type="password"
          id="passwordInput"
          label="Password"
          placeholder="Enter your password..."
          value={passwordInput}
          onChange={(e) => handleInputChange(e, setPasswordInput)}
        />
        <p>Current Password: {passwordInput}</p>
      </div>

      {/* Email Input */}
      <div className="input-section">
        <h3>Email Input</h3>
        <Input
          type="email"
          id="emailInput"
          label="Email"
          placeholder="Enter your email..."
          value={emailInput}
          onChange={(e) => handleInputChange(e, setEmailInput)}
        />
        <p>Current Email: {emailInput}</p>
      </div>

      {/* Number Input */}
      <div className="input-section">
        <h3>Number Input</h3>
        <Input
          type="number"
          id="numberInput"
          label="Number"
          placeholder="Enter a number..."
          value={numberInput}
          onChange={(e) => handleInputChange(e, setNumberInput)}
        />
        <p>Current Number: {numberInput}</p>
      </div>
    </div>
  );
};

export default BasicInputs;