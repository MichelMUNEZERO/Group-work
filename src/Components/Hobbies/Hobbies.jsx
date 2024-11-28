import React, { useState } from "react";
import './Hobbies.css'
import Hobby from "../Hobby";
function Hobbies() {
    const hobbies = [
        {
            title: 'Reading',
            description: 'Reading is more than just an activity—it’s an escape into different worlds, a chance to gain new knowledge, and a way to expand your imagination'
        }, 
        {
            title: 'Gardening',
            description: 'Gardening is the practice of cultivating and caring for plants, flowers, herbs, or even vegetables. It’s a satisfying and therapeutic hobby that connects people with nature '
        }, 
        {
            title: 'Painting',
            description: 'Painting is a creative and expressive hobby that allows individuals to communicate emotions, stories, or ideas through the medium of colors and brushstrokes '
        }, 
        {
            title: 'Cooking',
            description: 'Cooking is a practical and enjoyable hobby that involves preparing food and experimenting with recipes. It’s not just about sustenance; it’s about creativity, cultural exploration, and the joy of sharing meals with others'
        }, 
        {
            title: 'Traveling',
            description: 'Traveling is an exciting and enriching hobby that involves exploring new places, cultures, and experiences'
        }];
    const [selectedHobbyIndex, setSelectedHobbyIndex] = useState()
  console.log(selectedHobbyIndex)
    return (
        <div>
            <h1>My Hobbies</h1>
            <ol style={{listStylePosition: "inside"}}>
                {hobbies.map((element, index) => <li key={index} className="hobby-list" onClick={() => setSelectedHobbyIndex(index)}>{element.title}</li>)}
            </ol>
            <div>
                {selectedHobbyIndex >= 0 && <Hobby hoobyData={hobbies[selectedHobbyIndex]} />}
            </div>
        </div>
    );
  }
  
  export default Hobbies;