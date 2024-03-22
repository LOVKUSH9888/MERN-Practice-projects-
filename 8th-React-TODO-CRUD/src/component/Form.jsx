import React, { useState, useRef } from "react";

const SimpleForm = () => {
  // State variables for form inputs
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState(null);

  // Ref for focusing on the input field
  const inputRef = useRef();

  // Validation function
  const isInputValid = (value) => value.length >= 3;

  // Event handler for input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isInputValid(inputValue)) {
      setSubmittedValue(inputValue);
      setInputValue("");
    } else {
      alert("Please enter at least 3 characters.");
    }
  };

  // Function to focus on the input field
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter at least 3 characters:
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            ref={inputRef}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {submittedValue && (
        <div>
          <h3>Submitted Value:</h3>
          <p>{submittedValue}</p>
        </div>
      )}

      <button onClick={focusInput}>Focus on Input</button>
    </div>
  );
};

export default SimpleForm;
