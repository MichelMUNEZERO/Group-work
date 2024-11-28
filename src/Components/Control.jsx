import React, { useState } from 'react';

function Control() {
  const [inputValue, setInputValue] = useState(''); 

  const handleChange = (e) => {
    setInputValue(e.target.value); 
  };

  return (
    <div>
      <h1>Controlled Form Example</h1>
      
      <form>
        <label htmlFor="inputField">Enter something:</label>
        <input type="text" id="inputField"value={inputValue} onChange={handleChange} />
      </form>

      <p>You entered: {inputValue}</p> {/* Display the entered value below the form */}
    </div>
  );
}

export default Control;
