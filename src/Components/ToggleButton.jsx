import React, { useState } from "react";

function ToggleButton() {
  // Initial state is "OFF"
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the state between true (ON) and false (OFF)
  const toggleButton = () => {
    setIsOn(prevState => !prevState); // Toggle the state
  };

  return (
    <div>
      {/* Button text changes based on the 'isOn' state */}
      <button onClick={toggleButton}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default ToggleButton;