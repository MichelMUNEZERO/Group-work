import React from "react";
function HobbyList() {
  const hobbies = ['Reading', 'Gardening', 'Painting', 'Cooking', 'Traveling'];

  return (
    <div>
      <h1>My Hobbies</h1>
      <ul>
        {hobbies.map((hobby, index) => (
          <Hobby key={index} hobbyName={hobby} />
        ))}
      </ul>
    </div>
  );
}

export {HobbyList};