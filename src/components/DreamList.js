import React from "react";
import DreamListItem from './DreamListItem';
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
    gap: 0.5rem;
  }
`;

const sampleDreamObject = {
  place: 'Zimbabwe',
  length: '12 minutes',
  characters: 'Romy and Michele',
  body: 'We went to Ikea and bought a brass waterbed',
}

function DreamList(props) {
  return (
    <StyledDreamList>
      <h2>Dream List</h2>
      <ul>
        {props.dreamList.map((dream) =>
          <DreamListItem
            place={dream.place}
            length={dream.length}
            characters={dream.characters}
            body={dream.body}
            id={dream.id}
            key={dream.id}
          />
        )}
      </ul>
    </StyledDreamList>
  );
}

DreamList.propTypes = {
  dreamList: PropTypes.array
}

export default DreamList;