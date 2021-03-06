import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTapForm(props){

  function handleNewTapFormSubmission(event){
    event.preventDefault();
    props.onNewTapCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, quantity: event.target.quantity.value, id: v4()});
  } 

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTapFormSubmission}
        buttonText="Submit" />
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
}

export default NewTapForm;