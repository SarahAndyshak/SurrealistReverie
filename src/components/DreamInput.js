import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function DreamInput(props) {
  function handleNewDreamSubmission(event) {
    props.onNewDreamCreation({
      place: event.target.place.value,
      length: event.target.length.value,
      characters: event.target.characters.value,
      body: event.target.body.value
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewDreamSubmission}
        buttonText="let's extol the glory of your dream" />
    </>
  );
}

DreamInput.propTypes ={
  // place: PropTypes.string,
  // length: PropTypes.string,
  // characters: PropTypes.string,
  // body: PropTypes.string,
  onNewDreamCreation: PropTypes.func
};

export default DreamInput;