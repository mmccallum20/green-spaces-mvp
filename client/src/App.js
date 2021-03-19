import React, { useState } from "react";
import PostcodeForm from "./components/PostcodeForm";
import ParkData from "./components/ParkData";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./App.css";

const BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const BASE_URL_2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/park.json?&proximity=";
const API_KEY = process.env.REACT_APP_MAPBOX_TOKEN; //use a new API key here - please keep in a private file;

function App() {
  const [loading, setLoading] = useState(false);
  const [parkDetails, setParkDetails] = useState(null);
  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  async function pause(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getData(postcode) {
    let url = `${BASE_URL}${postcode}.json?access_token=${API_KEY}`;

    setLoading(true);
    setError("");

    setParkDetails(null);
    await pause(1000);

    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();

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
        console.log("this is working");
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

  function handleCoordinates(latitude, longitude) {
    setLatitude(latitude);
    setLongitude(longitude);
  }

  return (
    <div className="App">
      <div className="Card">
        <Card>
          <Card.Body style={{ color: "#61b15a" }}>
            <Card.Title>
              <h2>Welcome to</h2>
              <h2>Green Spaces</h2>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>

      <PostcodeForm onSubmit={(postcode) => getData(postcode)} />

      {parkDetails && (
        <ParkData
          parkDetails={parkDetails}
          latitude={latitude}
          longitude={longitude}
          onChange={() => handleCoordinates(latitude, longitude)}
        />
      )}

      {loading && (
        <h3 style={{ color: "green" }}>Loading your local data...</h3>
      )}

      {error && <h3>{error}</h3>}
    </div>
  );
}

export default App;
