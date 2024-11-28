import React from "react";
import './ProfileCard.css'; 

function ProfileCard({ name, age, email }) {
    return (
        <div className="profile-card">
            <h2>{name}</h2>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Email:</strong> {email}</p>
        </div>
    );
}

export default ProfileCard;