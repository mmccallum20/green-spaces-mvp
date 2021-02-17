import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

function MapData(props) {
  let m = props.mapDetails;

  const newLatitude = m.features[0].center[1];
  const newLongitude = m.features[0].center[0];

  const [viewport, setViewport] = useState({
    latitude: newLatitude,
    longitude: newLongitude,
    width: "100vw",
    height: "100vh",
    zoom: 16,
  });

  return (
    <div className="MapData">
      <h2>Location Data for {m.features[0].place_name}</h2>
      <ul>Your latitude is: {m.features[0].center[1]}</ul>
      <ul>Your longitude is: {m.features[0].center[0]} </ul>
      <div>
        <ReactMapGL
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
