import React, { useState } from 'react';
import { Input } from 'yashwant-component'; // Example import of your custom Input component
import './home.css'; // Import your separated CSS file for styling


function Home() {
    const [inputValue, setInputValue] = useState('');
  return (
    <div className="home-container">
      <h1>Welcome to the NPM Input Component Project</h1>
      <p>
        This project is an npm package for a customizable input component that can be used in any React application. It provides various features such as validation, theming, and accessibility enhancements to make input handling easier and more efficient.
      </p>
      
      {/* Example of the Input component usage */}
      <div className="input-demo-section">
        <h2>Component Demo</h2>
        <Input
          placeholder="Enter your text here"
          validation="email"
          theme="light-blue" // Example theme
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>Try typing in the input field above to see how the validation and theming work!</p>
      </div>
      
      {/* Section for installation and usage instructions */}
      <div className="usage-section">
        <h2>Getting Started</h2>
        <p>To install the package, run the following command:</p>
        <pre><code>npm install yashwant-component</code></pre>
        <p>Then, use the component in your React application like this:</p>
        <pre>
          <code>
            {`import { Input } from "yashwant-component";
import "yashwant-component/dist/index.css";`}
          </code>
        </pre>
      </div>
      
      {/* Section for links to documentation */}
      <div className="documentation-section">
        <h2>Documentation</h2>
        <p>
          For more details on the features and API, check out the 
          <a href="https://github.com/yashwant1711/Npm-Input-component" target='_blank'>documentation</a>.
        </p>
      </div>
    </div>
  );
}

export default Home;
