import React, { useState } from "react";

function ParkData(props) {
  let p = props.parkDetails;

  console.log(p.features[0].place_name);

  // const parkLatitude =
  // const parkLongitude =
  return <h2>Your nearest green space is: {p.features[0].place_name}</h2>;
}

export default ParkData;
