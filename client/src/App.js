import React, { useState } from "react";
import PostcodeForm from "./components/PostcodeForm";
import MapData from "./components/MapData";
import "./App.css";

const BASE_URL = "https://api.os.uk/search/names/v1/find?query=";
const API_KEY = "CXG4eNkC3r6uWkRT5Bmg752UppQelq6k";

function App() {
  const [loading, setLoading] = useState(false);
  const [mapDetails, setMapDetails] = useState(null);
  const [error, setError] = useState("");

  // const toggleResultsPage = () => {
  //   setToggleResults(!toggleResults);
  // };

  async function getData(postcode) {
    let url = `${BASE_URL}${postcode}&maxresults=1&key=${API_KEY}`;

    setLoading(true);
    setError("");
    setMapDetails(null);

    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setMapDetails(data);
      } else {
        setError(
          `Uh oh, server says no: ${response.status} ${response.statusText}`
        );
      }
    } catch (err) {
      setError(`Uh oh, network says no: ${err.message}`);
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <h1>Welcome to Green Spaces</h1>

      <PostcodeForm onSubmit={(postcode) => getData(postcode)} />

      {mapDetails && <MapData mapDetails={mapDetails} />}

      {loading && <h3>Loading your local data...</h3>}

      {error && <h3>{error}</h3>}
    </div>
  );
}

export default App;
