import React from "react";
import Dream from './Dream';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledDreamList = styled.div`
  background-color: salmon;
  width: 80vw;
  padding: 1rem;
  margin-bottom: 1rem;
  
  & > ul {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
  }
`;

function DreamList(props) {
  return (
    <StyledDreamList>
      <h2>Dream List</h2>
      <ul>
        {props.dreamList.map((dream) =>
          <Dream
            {...dream}
            key={dream.id}
            onClickEdit={props.handleClickEdit}
            onClickDelete={props.handleClickDelete}
          />
        )}
      </ul>
      
    </StyledDreamList>
  );
}

DreamList.propTypes = {
  dreamList: PropTypes.array,
  handleClickEdit: PropTypes.func,
  handleClickDelete: PropTypes.func,
}

export default DreamList;