import React from "react";
import "../styles/InputShowcase.css";

import BasicInputs from "./sections/BasicInputs";
import AdvancedInputs from "./sections/AdvanceInputs";
import Variations from "./sections/Variations.jsx";
import States from "./sections/States.jsx";
import AdditionalFeatures from "./sections/AdditionalFeatures.jsx";

const InputShowcase = () => {
  return (
    <div className="app-container">
      <h1>Input Components Documentation Project</h1>
      <h3>
        Demonstrating the Usage of the React-Based Input Components npm Package
      </h3>
      
      <BasicInputs />
      <AdvancedInputs />
      <Variations />
      <States />
      <AdditionalFeatures/>
    </div>
  );
};

export default InputShowcase;