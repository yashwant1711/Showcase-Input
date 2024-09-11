import React, { useState } from 'react';
import { Input } from 'yashwant-component';
import 'yashwant-component/dist/index.css';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const [yourlastname, setYourlastname] = useState('');
  const [bithdayDate, setBithdayDate] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailState, setEmailState] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  // State to handle validation messages
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (validateEmail(value)) {
      setEmailState('default');
      setEmailError('');
    } else {
      setEmailState('error');
      setEmailError('Please enter a valid email address');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setNameError('');
  };

  // Handle form submission
  const handleSubmit = () => {
    let hasError = false;

    // Name validation
    if (inputValue.trim() === '') {
      setNameError('Please enter your name');
      hasError = true;
    }

    // Last name validation
    if (yourlastname.trim() === '') {
      setLastNameError('Please enter your last name');
      hasError = true;
    }

    // Email validation
    if (email.trim() === '' || !validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setEmailState('error');
      hasError = true;
    }

    // Birth date validation
    if (bithdayDate.trim() === '') {
      setBirthDateError('Please enter your birth date');
      hasError = true;
    }

    // Mobile number validation
    if (mobileNumber.trim() === '') {
      setMobileError('Please enter your mobile number');
      hasError = true;
    } else if (mobileNumber.length !== 10) {
      setMobileError('Mobile number must be exactly 10 digits');
      hasError = true;
    }

    // If no errors, proceed to submit data
    if (!hasError) {
      const formData = {
        name: inputValue,
        lastName: yourlastname,
        email: email,
        birthday: bithdayDate,
        mobileNumber: mobileNumber,
        message: inputValue,
      };
      setSubmittedData(formData);
    }
  };

  const textAreaStyle = {
    height: '100px',
    resize: 'none',
    width: '400px',
    borderColor: '#d1d5db', // Example border color
    borderRadius: '8px',
    padding: '8px',
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f4f7f6',
  };

  const formContainerStyle = {
    background: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    maxWidth: '600px',
    width: '100%',
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>A Simple Form Based on the Input NPM Package</h1>

      <div className="input-section">
        <h2>Enter your name</h2>
        <Input
          type="text"
          id="textInput"
          label="Your Name"
          placeholder="Enter text here..."
          value={inputValue}
          onChange={handleInputChange}
          variant="floating"
          style={{ borderColor: nameError ? 'red' : '#d1d5db', borderRadius: '8px', width: '400px' }}
          validationMessage={nameError}
          validationMessageStatus={nameError ? 'error' : 'default'}
        />

        <h3>Enter your last name</h3>
        <Input
          type="text"
          id="yourlastname"
          label="Your Last Name"
          placeholder="Enter text here..."
          value={yourlastname}
          onChange={(e) => {
            setYourlastname(e.target.value);
            setLastNameError('');
          }}
          variant="floating"
          style={{ borderColor: lastNameError ? 'red' : '#d1d5db', borderRadius: '8px', width: '400px' }}
          validationMessage={lastNameError}
          validationMessageStatus={lastNameError ? 'error' : 'default'}
        />

        <h3>Your Email</h3>
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="Enter text here..."
          value={email}
          onChange={handleEmailChange}
          variant="floating"
          style={{ borderColor: emailError ? 'red' : '#d1d5db', borderRadius: '8px', width: '400px' }}
          validationMessage={emailError}
          validationMessageStatus={emailError ? 'error' : 'default'}
        />

        <h3>Your Date of Birth</h3>
        <Input
          type="month"
          id="dateofbirth"
          label="Date of Birth"
          value={bithdayDate}
          onChange={(e) => {
            setBithdayDate(e.target.value);
            setBirthDateError('');
          }}
          style={{ borderColor: birthDateError ? 'red' : '#d1d5db', borderRadius: '8px' }}
          validationMessage={birthDateError}
          validationMessageStatus={birthDateError ? 'error' : 'default'}
        />

        <h3>Your Mobile Number</h3>
        <Input
          type="tel"
          id="mobilenumber"
          label="Mobile Number"
          value={mobileNumber}
          countryCode="+91"
          isTelephone
          onChange={(e) => {
            setMobileNumber(e.target.value);
            setMobileError('');
          }}
          style={{ borderColor: mobileError ? 'red' : '#d1d5db', borderRadius: '8px', width: '150px' }}
          validationMessage={mobileError}
          validationMessageStatus={mobileError ? 'error' : 'default'}
        />

        <h3>Your Message</h3>
        <Input
          type="textarea"
          style={textAreaStyle}
          id="message"
          label="Message"
          placeholder="Enter text here..."
          value={inputValue}
          multiple={false}
          characterLimit={300}
          characterCount={true}
          onChange={(e) => {
            setInputValue(e.target.value);
            setMessageError('');
          }}
          validationMessage={messageError}
          validationMessageStatus={messageError ? 'error' : 'default'}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Submit
      </button>

      {submittedData && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #d1d5db', borderRadius: '8px' }}>
          <h4>Here are the form details:</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Last Name:</strong> {submittedData.lastName}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Date of Birth:</strong> {submittedData.birthday}</p>
          <p><strong>Mobile Number:</strong> {submittedData.mobileNumber}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
