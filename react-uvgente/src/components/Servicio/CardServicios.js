import React from "react";
import DefaultImageUser from "../../media/fulano.jpg";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
const CardServicios = (props) => {
  const { name, calification, isVerified, topPerformance, cobro, image } =
    props.tutor;
  const starsCalificationItems = [];
  let cal = calification;
  console.log(name);
  for (var i = 1; i <= 5; i++) {
    if (cal >= 1)
      starsCalificationItems.push(<TiStarFullOutline className="star" />);
    else if (cal > 0)
      starsCalificationItems.push(<TiStarHalfOutline className="star" />);
    else if (cal <= 0)
      starsCalificationItems.push(<TiStarOutline className="star" />);
    cal = cal - 1;
  }

  return (
    <div
      className="card-item-servicio"
      style={isVerified ? { border: "4px solid #efdb00" } : {}}
    >
      <div className="left-side-card-servicio">
        <div
          className="card-item-image-space-service"
          style={
            image
              ? { backgroundImage: `url(${image})`, backgroundSize: "cover" }
              : {
                backgroundImage: `url(${DefaultImageUser})`,
                backgroundSize: "cover",
              }
          }
        />
        <div className="performances-bars-containers">
          {Object.keys(topPerformance).map((key) => {
            return (
              <div className="progress-bar-container">
                <div className="text-into-progressbar"> {key}</div>
                <div
                  className="progress-fill"
                  style={{
                    height: "100%",
                    width: `${(100 * topPerformance[key]) / 5}%`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-side-card-servicio">
        <div className="name-space-on-card-item-service">{name}</div>
        <div className="calification-space">
          {starsCalificationItems.map((icon) => {
            return icon;
          })}
        </div>
        <div>Cobra:</div>
        <ul>
          {cobro.map((modo) => {
            return <li>{modo}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardServicios;