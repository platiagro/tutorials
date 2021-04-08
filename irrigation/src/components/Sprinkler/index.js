import React from "react";
import PropTypes from "prop-types";

import logoIrrigacao0 from "../../assets/logoIrrigacao0.png";
import logoIrrigacao1 from "../../assets/logoIrrigacao1.png";
import logoIrrigacao2 from "../../assets/logoIrrigacao2.png";
import logoIrrigacao3 from "../../assets/logoIrrigacao3.png";
import logoIrrigacao4 from "../../assets/logoIrrigacao4.png";

const Sprinkler = (props) => {
  const { volume, irrigationMinimum } = props;

  let imageSrc = logoIrrigacao4;

  if (volume < irrigationMinimum) {
    imageSrc = logoIrrigacao0;
  } else if (volume < 7) {
    imageSrc = logoIrrigacao1;
  } else if (volume < 10) {
    imageSrc = logoIrrigacao2;
  } else if (volume < 14) {
    imageSrc = logoIrrigacao3;
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <img
        src={imageSrc}
        alt="desenho de um irrigador (sprinkler)"
        style={{alignSelf: "center", height: "40px", width: "32px"}}
      />
      {volume !== 0 ? (
        <strong style={{alignSelf: "center"}}>{volume.toFixed(2).replace(".", ",")}L</strong>
      ) : (
        <strong>&nbsp;</strong>
      )}
    </div>
  );
};

Sprinkler.propTypes = {
  volume: PropTypes.number.isRequired,
  irrigationMinimum: PropTypes.number.isRequired,
};

export default Sprinkler;
