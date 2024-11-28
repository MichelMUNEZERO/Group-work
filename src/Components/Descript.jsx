import React from "react";
import "./index.css"; 
function ProfileCard({ name, age, email }) {
    return (
        <div style={styles.card}>
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.text}><strong>Age:</strong> {age}</p>
            <p style={styles.text}><strong>Email:</strong> {email}</p>
        </div>
    );
}

function Descript() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Profile Cards</h1>
            <ProfileCard name="Gisele" age={30} email="gisele@2003.com" />
            <ProfileCard name="Gady " age={25} email="Gady@.com" />
            <ProfileCard name="Micheal" age={25} email="Micheal@.com" />
        </div>
    );
}

// Inline styles (no need for external CSS file)
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "20px",
        minHeight: "10vh",
    },
    header: {
        color: "#333",
        marginBottom: "20px",
    },
    card: {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        margin: "10px",
        backgroundColor: "#fff",
        width: "300px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
    },
    name: {
        margin: "0",
        color: "#333",
    },
    text: {
        margin: "8px 0",
        color: "#555",
    },
};
export default Descript;