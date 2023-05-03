import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledReusableForm = styled.div`
  max-width: 80vw;
  min-width: 40vw;
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

function ReusableForm(props) {
  if (props.type === 'edit') {
    console.log('ResuableForm is type EDIT');
    console.log('received dream', props.dream)
  }
  return (
    <StyledReusableForm>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="place"
          defaultValue={props.type === 'edit' ? props.dream.place : ""}
          placeholder={props.type !== 'edit' ? ' Landscape or Environment' : ''}
        />
        <input
          type="text"
          name="length"
          defaultValue={props.type === 'edit' ? props.dream.length : ""} 
          placeholder={props.type !== 'edit' ? " Perceived duration" : ""}
        />
        <input
          type="text"
          name="characters"
          defaultValue={props.type === 'edit' ? props.dream.characters : "" } 
          placeholder={props.type !== 'edit' ? ' Wordly beings' : ''}
        />
        <textarea
          type="text"
          name="body"
          defaultValue={props.type === 'edit' ? props.dream.body : "" }
          placeholder={props.type !== 'edit' ? ' What happened' : ''}
          rows="6" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </StyledReusableForm>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  dream: PropTypes.object,
  type: PropTypes.string,
};

export default ReusableForm;