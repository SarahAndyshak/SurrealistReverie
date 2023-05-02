import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledDreamInput = styled.div`
  max-width: 80vw;
  & > form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  & > h1 {
    text-align: center;
    padding: 1rem;
  }
`;

function DreamInput(props) {
  function handleNewDreamSubmission(event) {
    event.preventDefault();
    props.onNewDreamCreation({
      place: event.target.place.value,
      length: event.target.length.value,
      characters: event.target.characters.value,
      body: event.target.body.value
    });
  }

  return (
    <StyledDreamInput>
      <h1>Commemorate and Celebrate Your Dreamscape</h1>
      <form onSubmit={handleNewDreamSubmission}>
        <input
          type="text"
          name="place"
          placeholder=" Landscape or Environment" />
        <input
          type="text"
          name="length"
          placeholder=" Perceived duration" />
        <input
          type="text"
          name="characters"
          placeholder=" Worldly beings" />
        <textarea
          type="text"
          name="body"
          placeholder=" What happened?"
          rows="6" />
        <button type="submit">let's extol the glory of your dream</button>
      </form>
    </StyledDreamInput>
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