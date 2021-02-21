import React, { useEffect, useState } from "react";

function ParkData(props) {
  let p = props.parkDetails;
  //let parkArray = [];
  let selectedParkArray = [];

  // const [selectedParkArray, setSelectedParkArray] = useState([]);
  //const [parkArray, setParkArray] = useState([]);

  useEffect(() => {
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
    props.sendSelectedParks(selectedParkArray);
  }, []);

  //props.sendSelectedParks(selectedParkArray);

  ///props.parkDetails.features[3].properties.category === "parks, leisure"

  return (
    <div className="ParkData">
      <h2>Your top green spaces are:</h2>
      <div>
        <ul>
          {/* {parkArray && parkArray.map((name) => <li key={name}> {name} </li>)} */}
        </ul>
      </div>
    </div>
  );
}

export default ParkData;
