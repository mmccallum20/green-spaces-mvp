import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./ParkData.css";
import "mapbox-gl/dist/mapbox-gl.css";

function ParkData(props) {
  const [selectedPark, setSelectedPark] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: props.latitude,
    longitude: props.longitude,
    width: "100vw",
    height: "100vh",
    zoom: 15,
  });

  let p = props.parkDetails;
  let chosenParkArray = [];
  let parkArray = [];

  for (let i = 0; i <= 4; i++) {
    if (!p.features[i].properties.category) {
      continue;
    }
    let values = Object.values(p.features[i].properties.category);
    if (!values) {
      continue;
    } else if (values === "park, leisure" || "picnic") {
      parkArray.push(p.features[i].place_name);
      let chosenParkName = p.features[i].place_name;
      let chosenParkLatitude = p.features[i].geometry.coordinates[1];
      let chosenParkLongitude = p.features[i].geometry.coordinates[0];
      chosenParkArray.push({
        chosenParkName,
        chosenParkLatitude,
        chosenParkLongitude,
      });
    }
  }

  return (
    <div className="ParkData">
      <h2>Your top green spaces are:</h2>
      <div className="GreenSpacesList">
        {parkArray.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </div>
      <div>
        <ReactMapGL
          className="mapbox-container" //not sure if I want to keep this
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/marym20/ckl7gi1j30jxn17mj4j8gvu25"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {chosenParkArray.map((park) => (
            <Marker
              key={park}
              latitude={park.chosenParkLatitude}
              longitude={park.chosenParkLongitude}
            >
              <button
                className="pointer-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPark(park);
                }}
              >
                <img src="/RedPointer2.jpg" alt="Park Icon" />
              </button>
            </Marker>
          ))}

          {selectedPark ? (
            <Popup
              className="Popup"
              onClose={() => {
                setSelectedPark(null);
              }}
              latitude={selectedPark.chosenParkLatitude}
              longitude={selectedPark.chosenParkLongitude}
            >
              <div>
                <h2>{selectedPark.chosenParkName}</h2>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  );
}

export default ParkData;
