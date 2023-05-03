import React from "react";
import Dream from './Dream';
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledDreamList = styled.div`
  // background-color: salmon;
  width: 80vw;
  padding: 1rem;
  margin-bottom: 1rem;

  & > h1 {
    margin-bottom: 4rem;
    text-align: center;
  }
  
  & > ul {
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
  }
`;


function DreamList(props) {
  console.log('DreamList props.dreamList is');
  console.table(props.dreamList);
  return (
    <StyledDreamList>
      <h1 style={{display: 'flex', justifyContent: 'center', gap: '0.5rem'}}><div style={{ transform: 'scaleX(-1)'}}>✨</div> Dream List <div>✨</div></h1>
      <ul>
        {props.dreamList.map((dream) =>
          <Dream
            {...dream}
            key={dream.id}
            onClickEdit={props.handleClickEdit}
            onClickDelete={props.handleClickDelete}
            onDreamSelection={props.onDreamSelection}
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
  onDreamSelection: PropTypes.func
}

export default DreamList;