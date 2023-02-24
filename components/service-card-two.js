import React from "react";
import Link from "next/link";

const ServiceCardTwo = ({ data }) => {
  const { iconName, title } = data;
  return (
      <div className="icon_box_1 text-center">
        <div className="flipper">
          <div className="front">
            <i className={iconName}></i>
            <h3>{title}</h3>
          </div>
          <div className="back">
            <i className={iconName}></i>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
  );
};

export default ServiceCardTwo;
