import React, { useState } from "react";

function PostcodeForm(props) {
  const [postcode, setPostcode] = useState("");

  const handleInputChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Do not send to server
    props.onSubmit(postcode);
    //let newPostcode = { postcode }; // defining a newProject
    // props.addPostcode(newPostcode); // add the project using props
    setPostcode("");
    //toggleResultsPage();
    //getPoints();
  };

  return (
    <div className="PostcodeForm">
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

export default PostcodeForm;
