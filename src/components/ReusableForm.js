import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledReusableForm = styled.div`
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

function ReusableForm(props) {

  return (
    <StyledReusableForm>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type="submit">{props.buttonText}</button>
      </form>
    </StyledReusableForm>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;