import React, { useState } from "react";
import PostcodeForm from "./components/PostcodeForm";
import MapData from "./components/MapData";
import ParkData from "./components/ParkData";
import ReactMapGL, { Marker } from "react-map-gl";
import "./App.css";

const BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const BASE_URL_2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/park.json?&proximity=";
const API_KEY = process.env.REACT_APP_MAPBOX_TOKEN; //use a new API key here - please keep in a private file;

function App() {
  const [loading, setLoading] = useState(false);
  const [mapDetails, setMapDetails] = useState(null);
  const [parkDetails, setParkDetails] = useState(null); //do I need an array/object here?
  const [error, setError] = useState("");

  async function pause(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getData(postcode) {
    let url = `${BASE_URL}${postcode}.json?access_token=${API_KEY}`;

    setLoading(true);
    setError(""); // Maybe delete?
    setMapDetails(null);
    setParkDetails(null);
    await pause(1000);

    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        setMapDetails(data);
        let newLatitude = data.features[0].center[1];
        let newLongitude = data.features[0].center[0];
        getParkData(newLatitude, newLongitude);
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

  async function getParkData(newLatitude, newLongitude) {
    let parkDataUrl = `${BASE_URL_2}${newLongitude},${newLatitude}&access_token=${API_KEY}`;

    try {
      let response = await fetch(parkDataUrl);
      if (response.ok) {
        let data = await response.json();
        setParkDetails(data);
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

      {parkDetails && <ParkData parkDetails={parkDetails} />}

      {loading && (
        <h3 style={{ color: "green" }}>Loading your local data...</h3>
      )}

      {error && <h3>{error}</h3>}
    </div>
  );
}

export default App;
