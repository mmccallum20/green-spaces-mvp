import React, { useState } from "react";
import "./App.css";

function App() {
  const [postcode, setPostcode] = useState("");

  // The change is effected using a switch statement.
  // When text is inputted, a value is set to the name

  const handleInputChange = (event) => {
    let { name, value } = event.target;

    switch (name) {
      case "postcode":
        setPostcode(value);
        break;
      default:
    }
  };

  const handleSubmit = (event) => {
    console.log(postcode); // Just to check if button works
    event.preventDefault(); // Do not send to server
    // let newPostcode = { postcode }; // defining a newProject
    // props.addPostcode(newPostcode); // add the project using props
    setPostcode("");
  };

  return (
    <div className="App">
      <h1>Welcome to Green Spaces</h1>
      <h2>Enter your UK postcode below to find a local green space.</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="postcode">Postcode</label>
        <input
          name="postcode"
          id="postcode"
          // Curly brackets here indicate to substitute javascript in here (from above - see line 6, variable)
          value={postcode}
          onChange={(e) => handleInputChange(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
