import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PostcodeForm.css";

function PostcodeForm(props) {
  const [postcode, setPostcode] = useState("");

  const handleInputChange = (event) => {
    setPostcode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(postcode);
    setPostcode("");
  };

  return (
    <div className="PostcodeForm">
      <h4>Enter your place name, </h4>
      <h4>street name, postal or zip code</h4>
      <h4>to find a local green space.</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="postcode" />
        <input
          placeholder="Enter Location"
          name="postcode"
          id="postcode"
          value={postcode}
          onChange={(e) => handleInputChange(e)}
        />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default PostcodeForm;
