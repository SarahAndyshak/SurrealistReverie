import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function DreamInput(props) {

  function handleNewDreamSubmission(event) {
    console.log('USER -----------------------------')
    console.log(props.currentUser)
    console.log('USER -----------------------------')
    event.preventDefault();
    props.onNewDreamCreation({
      place: event.target.place.value,
      length: event.target.length.value,
      characters: event.target.characters.value,
      body: event.target.body.value,
      userId: props.currentUser.uid,
      email: props.currentUser.email,
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
  onNewDreamCreation: PropTypes.func,
  userId: PropTypes.string,
  email: PropTypes.string
};

export default DreamInput;