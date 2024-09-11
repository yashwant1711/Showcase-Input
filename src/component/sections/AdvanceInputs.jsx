import React, { useState } from "react";
import { Input } from "yashwant-component";

const AdvancedInputs = () => {
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [dateTimeLocalInput, setDateTimeLocalInput] = useState("");
  const [monthInput, setMonthInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [fileInput, setFileInput] = useState([]);
  const [textareaInput, setTextareaInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleFileChange = (e) => {
    setFileInput(e.target.files ? Array.from(e.target.files) : []);
  };

  const handleSearch = (query) => {
    if (query.length === 0) {
      setSearchResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const mockResults = [
        "Result 1 for " + query,
        "Result 2 for " + query,
        "Result 3 for " + query,
      ];
      setSearchResults(mockResults);
      setIsLoading(false);
    }, 1000);
  };

  const handleSearchChange = (e) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    handleSearch(newValue);
  };

  return (
    <div>
      <h2>Advanced Inputs</h2>

      {/* Date Input */}
      <div className="input-section">
        <h3>Date Input</h3>
        <Input
          type="date"
          id="dateInput"
          label="Date"
          value={dateInput}
          onChange={(e) => handleInputChange(e, setDateInput)}
        />
        <p>Selected Date: {dateInput}</p>
      </div>

      {/* Time Input */}
      <div className="input-section">
        <h3>Time Input</h3>
        <Input
          type="time"
          id="timeInput"
          label="Time"
          value={timeInput}
          onChange={(e) => handleInputChange(e, setTimeInput)}
        />
        <p>Selected Time: {timeInput}</p>
      </div>

      {/* Datetime-Local Input */}
      <div className="input-section">
        <h3>Datetime-Local Input</h3>
        <Input
          type="datetime-local"
          id="dateTimeLocalInput"
          label="Date & Time"
          value={dateTimeLocalInput}
          onChange={(e) => handleInputChange(e, setDateTimeLocalInput)}
        />
        <p>Selected Date & Time: {dateTimeLocalInput}</p>
      </div>

      {/* Month Input */}
      <div className="input-section">
        <h3>Month Input</h3>
        <Input
          type="month"
          id="monthInput"
          label="Month"
          value={monthInput}
          onChange={(e) => handleInputChange(e, setMonthInput)}
        />
        <p>Selected Month: {monthInput}</p>
      </div>

      {/* Optimized Search Input */}
      <div className="input-section">
        <h3>Optimized Search Input</h3>
        <Input
          type="search"
          id="optimizedSearch"
          label="Search"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={handleSearchChange}
          state={isLoading ? "loading" : "default"}
          debounceDelay={300}
        />
        <div style={{ marginTop: "20px" }}>
          {isLoading ? (
            <p>Loading...</p>
          ) : searchResults.length > 0 ? (
            searchResults.map((result, index) => <p key={index}>{result}</p>)
          ) : (
            searchQuery.length > 0 && <p>No results found.</p>
          )}
        </div>
      </div>

      {/* URL Input */}
      <div className="input-section">
        <h3>URL Input</h3>
        <Input
          type="url"
          id="urlInput"
          label="URL"
          placeholder="Enter website address..."
          value={urlInput}
          onChange={(e) => handleInputChange(e, setUrlInput)}
        />
        <p>Current URL: {urlInput}</p>
      </div>

      {/* Telephone Input */}
      <div className="input-section">
        <h3>Telephone Input</h3>
        <Input
          type="tel"
          id="phoneInput"
          label="Phone Number"
          countryCode="+91"
          isTelephone
          placeholder="Enter phone number..."
          value={phoneInput}
          onChange={(e) => handleInputChange(e, setPhoneInput)}
        />
        <p>Current Phone Number: {phoneInput}</p>
      </div>

      {/* File Input */}
      <div className="input-section">
        <h3>File Input</h3>
        <Input
          type="file"
          id="fileInput"
          label="Upload Files"
          onChange={handleFileChange}
          multiple
        />
        <div>
          {fileInput.length > 0 && (
            <>
              <h4>Selected Files:</h4>
              <ul>
                {fileInput.map((file, index) => (
                  <li key={index}>
                    {file.name} - {(file.size / 1024).toFixed(2)} KB
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Textarea Input */}
      <div className="input-section">
        <h3>Textarea Input</h3>
        <Input
          type="textarea"
          id="textareaInput"
          label="Textarea"
          placeholder="Enter multiline text..."
          value={textareaInput}
          onChange={(e) => handleInputChange(e, setTextareaInput)}
        />
        <p>Textarea Content: {textareaInput}</p>
      </div>
    </div>
  );
};

export default AdvancedInputs;