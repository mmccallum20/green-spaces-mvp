import React, { useState } from "react";
import PostcodeForm from "./components/PostcodeForm";
import MapData from "./components/MapData";
import ReactMapGL from "react-map-gl";
import "./App.css";

const BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const API_KEY =
  "pk.eyJ1IjoibWFyeW0yMCIsImEiOiJja2w3ZWVjZmYwMWtjMm9sYmg0Nnlnc2loIn0.1CjPEGG3IDVxG5A5X-wuZw"; //use a new API key here - please keep in a private file;

function App() {
  const [loading, setLoading] = useState(false);
  const [mapDetails, setMapDetails] = useState(null);
  const [error, setError] = useState("");

  async function pause(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getData(postcode) {
    let url = `${BASE_URL}${postcode}.json?access_token=${API_KEY}`;

    setLoading(true);
    setError(""); // Maybe delete?
    setMapDetails(null);
    await pause(1000);

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

      {loading && (
        <h3 style={{ color: "green" }}>Loading your local data...</h3>
      )}

      {error && <h3>{error}</h3>}

      <ReactMapGL mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} />
    </div>
  );
}

export default App;
