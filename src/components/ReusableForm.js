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

  return (
    <StyledReusableForm>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="place"
          // placeholder={props.type === 'edit' ? props.dream.place : " Landscape or Environment"} 
          placeholder=" Landscape or Environment"
        />
        <input
          type="text"
          name="length"
          // placeholder={props.type === 'edit' ? props.dream.length : " Perceived duration"} 
          placeholder=" Perceived duration"
        />
        <input
          type="text"
          name="characters"
          // placeholder={props.type === 'edit' ? props.dream.characters : " Worldly beings" } 
          placeholder=" Worldly beings"
        />
        <textarea
          type="text"
          name="body"
          // placeholder={props.type === 'edit' ? props.dream.body : " What happened?" }
          placeholder=" What happened"
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