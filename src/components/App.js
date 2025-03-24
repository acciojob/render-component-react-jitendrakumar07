import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  // State to hold user input (name)
  const [name, setName] = useState("");

  // Handle input changes and update state
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div id="main" style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "200px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        {name ? `Hello, ${name}!` : ""}
      </p>
    </div>
  );
};

export default App;
