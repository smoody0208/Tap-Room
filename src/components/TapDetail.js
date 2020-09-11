import React from "react";
import PropTypes from "prop-types";

function TapDetail(props) {
  const { tap, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Tap Info</h1>
      <p>Name: {tap.name}</p>
      <p>Brand: {tap.brand}</p>
      <p>Price: {tap.price}</p>
      <p>Alcohol Content: {tap.alcoholContent}</p>
      <p>Stock: {tap.quantity}</p>
      <button onClick={props.onClickingEdit}>Update Tap</button>
      <button onClick={() => props.onClickingSold(tap)}>Sell Pint</button>
      <button onClick={() => onClickingDelete(tap.id)}>Delete Tap</button>
      <hr />
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSold: PropTypes.func
};

export default TapDetail;