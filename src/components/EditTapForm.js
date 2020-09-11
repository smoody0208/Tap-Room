import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTapForm (props) {
    const { tap } = props;

    function handleEditTapFormSubmission(event) {
        event.preventDefault();
        props.onEditTap({
            name: event.target.name.value,
            brand: event.target.brand.value,
            price: event.target.price.value,
            alcoholContent: event.target.alcoholContent.value,
            id: tap.id
        });
    }
    return(
        <React.Fragment>
          <ReusableForm
            formSubmissionHandler={handleEditTapFormSubmission}
            buttonText="Update Tap" />
        </React.Fragment>
        
    );
}

EditTapForm.propTypes = {
    onEditTap: PropTypes.func
};

export default EditTapForm;