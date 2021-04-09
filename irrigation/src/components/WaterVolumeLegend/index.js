import React from "react";
import PropTypes from "prop-types";

import logoIrrigacao0 from "../../assets/logoIrrigacao0.png";
import logoIrrigacao1 from "../../assets/logoIrrigacao1.png";
import logoIrrigacao2 from "../../assets/logoIrrigacao2.png";
import logoIrrigacao3 from "../../assets/logoIrrigacao3.png";
import logoIrrigacao4 from "../../assets/logoIrrigacao4.png";

import { Tag } from "antd";

const WaterVolumeLegend = (props) => {
  const { irrigationMinimum } = props;

  return (
    <>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <img src={logoIrrigacao0} alt="" />
          <Tag style={{margin: 0, color: "#000"}} color="#f0f2f5">0L</Tag>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <img src={logoIrrigacao1} alt="" />
          <Tag style={{margin: 0, color: "#000"}} color="#f0f2f5">&gt;{irrigationMinimum}L</Tag>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <img src={logoIrrigacao2} alt="" />
          <Tag style={{margin: 0, color: "#000"}} color="#f0f2f5">&gt;7L</Tag>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <img src={logoIrrigacao3} alt="" />
          <Tag style={{margin: 0, color: "#000"}} color="#f0f2f5">&gt;10L</Tag>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <img src={logoIrrigacao4} alt="" />
          <Tag style={{margin: 0, color: "#000"}} color="#f0f2f5">&gt;14L</Tag>
        </div>
      </div>
    </>
  );
};

WaterVolumeLegend.propTypes = {
  irrigationMinimum: PropTypes.number,
};

export default WaterVolumeLegend;
