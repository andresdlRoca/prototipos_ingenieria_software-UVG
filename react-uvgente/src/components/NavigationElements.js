import PropTypes from "prop-types";
import React, { setState } from "react";

const NavigationElements = (props) => {
  const title = props.title;
  const image = props.image;
  const last_element = props.last_element;
  const navAction = props.navAction;

  if ({ image } == "none") {
    return (
      <div>
        <h3 onClick={navAction}> {title} </h3>
      </div>
    );
  } else {
    return (
      <div>
        <p>{image}</p>
        <h3> {title} </h3>
      </div>
    );
  }
};

NavigationElements.defaultProps = {
  title: "NO-NAME",
  imagen: "none",
  last_element: "False",
  navAction: PropTypes.func,
};

export default NavigationElements;
