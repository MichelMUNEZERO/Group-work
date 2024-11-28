import React, { useState } from "react";

const Check = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Checkbox Form</h1>
      <form>
        {options.map((option) => (
          <div key={option}>
            <label>
              <input
                type="checkbox"
                value={option}
                onChange={handleCheckboxChange}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <div>
        <h2>Selected Options:</h2>
        {selectedOptions.length > 0 ? (
          <ul>
            {selectedOptions.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        ) : (
          <p>No options selected</p>
        )}
      </div>
    </div>
  );
};

export default Check;
