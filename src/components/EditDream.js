import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function DreamInput(props) {
  function handleEditingDreamInList(event) {
    event.preventDefault();
    props.onEditDream({
      place: event.target.place.value,
      length: event.target.length.value,
      characters: event.target.characters.value,
      body: event.target.body.value
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditingDreamInList}
        buttonText="Revise Reverie" />
    </>
  );
}

DreamInput.propTypes ={
  place: PropTypes.string,
  length: PropTypes.string,
  characters: PropTypes.string,
  body: PropTypes.string,
  onNewDreamCreation: PropTypes.func
};

export default DreamInput;