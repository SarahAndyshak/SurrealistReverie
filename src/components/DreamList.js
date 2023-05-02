import React from "react";
import DreamListItem from './DreamListItem';
import styled from 'styled-components';

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
  characters: 'Romy, Michele',
  body: 'We went to Ikea and bought a brass waterbed',
}

function DreamList() {
  return (
    <StyledDreamList>
      <h2>Dream List</h2>
      <ul>
        <DreamListItem 
          {...sampleDreamObject}
        />

      </ul>
    </StyledDreamList>
  );
}

export default DreamList;