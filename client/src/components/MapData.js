import React, { useState } from "react";

function MapData(props) {
  let m = props.mapDetails.results[0].GAZETTEER_ENTRY;

  return (
    <div className="MapData">
      <h2>
        Location Data for {m.NAME1}, {m.COUNTRY}
      </h2>
      <ul>
        {m.POPULATED_PLACE && <li>Place Name: {m.POPULATED_PLACE}</li>}
        {m.DISTRICT_BOROUGH && <li>Borough: {m.DISTRICT_BOROUGH}</li>}
        {m.COUNTY_UNITARY && <li>County: {m.COUNTY_UNITARY}</li>}
      </ul>
    </div>
  );
}

export default MapData;
