import React, { useState } from "react";

function ParkData(props) {
  // const [parkName, setParkName] = useState("");
  // const [parkAddress, setParkAddress] = useState("");

  let p = props.parkDetails;
  console.log(p);

  // console.log(props.parkDetails);

  let parkArray = [];

  for (let i = 0; i <= 4; i++) {
    if (!p.features[i].properties.category) {
      continue;
    }
    let values = Object.values(p.features[i].properties.category);
    if (!values) {
      continue;
    } else if (values === "park, leisure" || "picnic") {
      parkArray.push(p.features[i].text);
      parkArray.push(p.features[i].place_name);
    }
  }

  console.log(parkArray);

  ///props.parkDetails.features[3].properties.category === "parks, leisure"

  return (
    <div className="ParkData">
      <h2>Your top green spaces are:</h2>
      <h3>{parkArray[0]}</h3>
      <h4>{parkArray[1]}</h4>
      <h3>{parkArray[2]}</h3>
      <h4>{parkArray[3]}</h4>
      <h3>{parkArray[4]}</h3>
      <h4>{parkArray[5]}</h4>
      <h3>{parkArray[6]}</h3>
      <h4>{parkArray[7]}</h4>
      <h3>{parkArray[8]}</h3>
      <h4>{parkArray[9]}</h4>

      {/* There must be a better way of doing this - research.  */}
    </div>
  );
}

export default ParkData;
