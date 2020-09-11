import React from "react";
import PropTypes from "prop-types";

function Tap(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTapClicked(props.id)}>
        <h3>{props.brand} - {props.name}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Tap.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string, 
  whenTapClicked: PropTypes.func 
};

export default Tap;