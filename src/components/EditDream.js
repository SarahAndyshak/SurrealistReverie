import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditDream(props) {
  const { dream } = props;
  
  function handleEditingDreamInList(event) {
    event.preventDefault();
    props.onEditDream({
      place: event.target.place.value,
      length: event.target.length.value,
      characters: event.target.characters.value,
      body: event.target.body.value,
      id: dream.id
    });
  }

  return (
    <>
      {/* <h4>I was in {dream.place} for {dream.length} with {dream.characters}</h4> */}
      <ReusableForm
        type='edit'
        formSubmissionHandler={handleEditingDreamInList}
        dream={dream}
        buttonText="Revise Reverie" />
    </>
  );
}

EditDream.propTypes ={
  onEditDream: PropTypes.func,
  dream: PropTypes.object
};

export default EditDream;