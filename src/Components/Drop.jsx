import React, { useState } from 'react';

function Drop() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        {isOpen ? 'Hide Options' : 'Show Options'}
      </button>

      {isOpen && (
        <ul>
          <li>java script</li>
          <li>database</li>
          <li>propability</li>
        </ul>
      )}
    </div>
  );
};

export default Drop;
