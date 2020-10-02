import React from "react";
import Tap from "./Tap";
import PropTypes from "prop-types";

function TapList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.tapList).map((tap) =>
        <Tap
        whenTapClicked = {props.onTapSelection}
        brand={tap.brand}
        name={tap.name}
        price={tap.price}
        alcoholContent={tap.alcoholContent}
        pintsLeft={tap.pintsLeft}
        id={tap.id}
        key={tap.id}/>
      )}
    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
  onTapSelection: PropTypes.func
};

export default TapList;