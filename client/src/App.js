import React, { useState } from "react";
import PostcodeForm from "./components/PostcodeForm";
import ParkData from "./components/ParkData";
// import MapData from "./components/MapData";
// import ReactMapGL, { Marker } from "react-map-gl";

import "./App.css";

const BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const BASE_URL_2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/park.json?&proximity=";
const API_KEY = process.env.REACT_APP_MAPBOX_TOKEN; //use a new API key here - please keep in a private file;

function App() {
  // let newLatitude = 51.5074;
  // let newLongitude = 0.1278;

  // function reducer(viewport, action) {
  //   switch (action.type) {
  //     case "latitude":
  //       return { latitude: viewport.latitude };
  //     case "longitude":
  //       return { longitude: viewport.longitude };
  //     default:
  //       return viewport;
  //   }
  // }

  const [loading, setLoading] = useState(false);
  const [parkDetails, setParkDetails] = useState(null); //do I need an array/object here?
  const [mapDetails, setMapDetails] = useState(null);
  const [error, setError] = useState("");
  const [selectedParkArray, setSelectedParkArray] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // function setLongitude() {
  //   dispatch({ type: "longitude" });

  // function updateViewportState() {
  //   setViewport(viewport);
  // }

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
        //setMapDetails(data);
        let latitude = data.features[0].center[1];
        let longitude = data.features[0].center[0];
        setLatitude(latitude);
        setLongitude(longitude);
        getParkData(latitude, longitude);
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

  async function getParkData(latitude, longitude) {
    let parkDataUrl = `${BASE_URL_2}${longitude},${latitude}&access_token=${API_KEY}`;

    try {
      let response = await fetch(parkDataUrl);
      if (response.ok) {
        let data = await response.json();
        setParkDetails(data);
        //handleCoordinates(latitude, longitude);
      } else {
        setError(
          `Uh oh, server says no: ${response.status} ${response.statusText}`
        );
      }
    } catch (err) {
      setError(`Uh oh, network says no: ${err.message}`);
    }
    setLoading(false);

    //setSelectedParkArray();
  }

  function handleCoordinates(latitude, longitude) {
    setLatitude(latitude);
    setLongitude(longitude);
  }

  return (
    <div className="App">
      <h1>Welcome to Green Spaces</h1>

      <PostcodeForm onSubmit={(postcode) => getData(postcode)} />

      {parkDetails && (
        <ParkData
          parkDetails={parkDetails}
          latitude={latitude}
          longitude={longitude}
          sendSelectedParks={(e) => setSelectedParkArray(e)}
          onChange={() => handleCoordinates(latitude, longitude)}
        />
      )}

      <div className="MapData">
        {/* <h2>Location Data for {mapDetails.features.place_name}</h2>
        <ul>Your latitude is: {mapDetails.features.center[1]}</ul>
        <ul>Your longitude is: {mapDetails.features.center[0]} </ul> */}
      </div>

      {loading && (
        <h3 style={{ color: "green" }}>Loading your local data...</h3>
      )}

      {error && <h3>{error}</h3>}
    </div>
  );
}

export default App;
