import React, { useState } from "react";
import ResultsPage from "./components/ResultsPage";
import "./App.css";

function App() {
  const [postcode, setPostcode] = useState("");
  const [toggleResults, setToggleResults] = useState(true);
  const [data, setData] = useState({});

  const toggleResultsPage = () => {
    setToggleResults(!toggleResults);
  };

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
    event.preventDefault(); // Do not send to server
    console.log(postcode); // Just to check if button works
    //let newPostcode = { postcode }; // defining a newProject
    // props.addPostcode(newPostcode); // add the project using props
    setPostcode("");
    toggleResultsPage();
    getPoints();
  };

  async function getPoints() {
    console.log("Points will be set here");
    let url =
      "https://api.os.uk/search/names/v1/find?query=nw10 8ba&maxresults=1&key=CXG4eNkC3r6uWkRT5Bmg752UppQelq6k";

    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        console.log(data.results[0].GAZETTEER_ENTRY.POPULATED_PLACE);
        console.log(data.results[0].GAZETTEER_ENTRY.DISTRICT_BOROUGH);
        console.log(data.results[0].GAZETTEER_ENTRY.COUNTY_UNITARY);
        console.log(data.results[0].GAZETTEER_ENTRY.COUNTRY);
        console.log(data.results[0].GAZETTEER_ENTRY.GEOMETRY_X);
        console.log(data.results[0].GAZETTEER_ENTRY.GEOMETRY_Y);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Green Spaces</h1>

      <h2>Enter your UK postcode below to find a local green space.</h2>

      <ul>
        {Object.keys(data).map((p) => (
          <li>{p.results}</li>
        ))}
      </ul>

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

      {!toggleResults && <ResultsPage />}
    </div>
  );
}

export default App;
