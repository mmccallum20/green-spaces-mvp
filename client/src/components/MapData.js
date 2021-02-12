import React, { useState } from "react";

function MapData(props) {
  let m = props.mapDetails;

  let url =
    "https://osmaps.ordnancesurvey.co.uk/greenspace/51.49993,-0.12558,15";

  let element = <a href={url}>OS Map</a>;

  return (
    <div className="MapData">
      <h2>
        Location Data for {m.result.postcode}, {m.result.nhs_ha},{" "}
        {m.result.country}
      </h2>
      <ul>
        {/* {m.POPULATED_PLACE && <li>Place Name: {m.POPULATED_PLACE}</li>}
        {m.DISTRICT_BOROUGH && <li>Borough: {m.DISTRICT_BOROUGH}</li>}
        {m.COUNTY_UNITARY && <li>County: {m.COUNTY_UNITARY}</li>} */}
        <li>Latitude: {m.result.latitude}</li>
        <li>Longitude: {m.result.longitude}</li>

        {element}
      </ul>
    </div>
  );
}

export default MapData;
