import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDreamListItem = styled.li`
  position: relative;
  border: 0.25rem solid #00000066;
  border-radius: 1rem;
  background-color: #ddd;
  color: #222;
  padding: 1rem;
  z-index: 0;

  // &:before, :after {
  //   content: '';
  //   width: 70%;
  //   height: 100%;
  //   background-color: inherit;
  //   position: absolute;
  //   top: -3rem;
  //   left: -3rem;
  //   border-radius: 50%;
  //   z-index: -1;
  // }

  // &:after {
  //   bottom: -3rem;
  //   right: -3rem;
  // }

`;

function DreamListItem(props) {

  return (
    <StyledDreamListItem>
      <h1>dreamy details</h1>
      <h4>I was in {props.place} for {props.length} with {props.characters}</h4>
      <p>{props.body}</p>
    </StyledDreamListItem>
  );
}

DreamListItem.propTypes = {
  place: PropTypes.string,
  length: PropTypes.string,
  characters: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string
};

export default DreamListItem;