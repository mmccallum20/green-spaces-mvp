import React, { useState } from "react";

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
      <h2>Enter your UK postcode below to find a local green space.</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="postcode">Postcode</label>
        <input
          name="postcode"
          id="postcode"
          value={postcode}
          onChange={(e) => handleInputChange(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostcodeForm;
