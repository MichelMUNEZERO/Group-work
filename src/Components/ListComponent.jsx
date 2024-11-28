import React from "react";

function ListComponent() {
  // Sample list of items
  const items = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {/* Using .map() to loop through items and display them */}
        {items.map((item, index) => (
          <li key={index}>{item}</li> // Display each item in an <li> tag
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;