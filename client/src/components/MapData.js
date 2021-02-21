import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function MapData(props) {
  //   let lat = props.latitude;
  //   let lon = props.longitude;

  //   console.log(lat);
  //   console.log(lon);

  //   const newLatitude = m.center[1];
  //   const newLongitude = m.center[0];

  const [viewport, setViewport] = useState({
    latitude: props.latitude,
    longitude: props.longitude,
    width: "100vw",
    height: "100vh",
    zoom: 16,
  });

  return (
    <div className="MapData">
      {/* <h2>Location Data for {m.place_name}</h2>
      <ul>Your latitude is: {m.center[1]}</ul>
      <ul>Your longitude is: {m.center[0]} </ul> */}
      <div>
        <ReactMapGL
          className="mapbox-container" //not sure if I want to keep this
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/marym20/ckl7gi1j30jxn17mj4j8gvu25"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          Marker Here
        </ReactMapGL>
      </div>
    </div>
  );
}

export default MapData;
