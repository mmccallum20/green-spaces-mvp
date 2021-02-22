import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./ParkData.css";
import "mapbox-gl/dist/mapbox-gl.css";

function ParkData(props) {
  //const [parkData, setParkData] = useState([]);
  //const [parkArray, setParkArray] = useState([]);

  //const [chosenParks, setChosenParks] = useState([]);

  // console.log(props.latitude);
  // console.log(props.longitude);

  const [viewport, setViewport] = useState({
    latitude: props.latitude,
    longitude: props.longitude,
    width: "100vw",
    height: "100vh",
    zoom: 16,
  });

  let p = props.parkDetails;
  //let parkArray = [];
  let selectedParkArray = [];
  let parkArray = [];

  for (let i = 0; i <= 4; i++) {
    if (!p.features[i].properties.category) {
      continue;
    }
    let values = Object.values(p.features[i].properties.category);
    if (!values) {
      continue;
    } else if (values === "park, leisure" || "picnic") {
      //parkArray.push(p.features[i].text);
      parkArray.push(p.features[i].place_name);
      let selectedParkName = p.features[i].place_name;
      let selectedParkLatitude = p.features[i].geometry.coordinates[1];
      let selectedParkLongitude = p.features[i].geometry.coordinates[0];
      selectedParkArray.push({
        selectedParkName,
        selectedParkLatitude,
        selectedParkLongitude,
      });
    }
  }

  console.log(parkArray);
  console.log(selectedParkArray);

  //console.log(props.parkdetails.parkArray);

  console.log(props.latitude);
  console.log(props.longitude);

  return (
    <div className="ParkData">
      <h2>Your top green spaces are:</h2>
      <div className="GreenSpacesList">
        Data here
        {parkArray.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </div>

      {/* <li>{selectedParkArray[0].selectedParkName}</li> */}
      <div>
        <ReactMapGL
          className="mapbox-container" //not sure if I want to keep this
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/marym20/ckl7gi1j30jxn17mj4j8gvu25"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {selectedParkArray.map((selectedPark) => (
            <Marker
              key={selectedPark}
              latitude={selectedPark.selectedParkLatitude}
              longitude={selectedPark.selectedParkLongitude}
            >
              <button className="pointer-btn">
                <img src="/RedPointer2.jpg" alt="Park Icon" />
              </button>
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    </div>
  );
}

export default ParkData;
