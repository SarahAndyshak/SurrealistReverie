import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDreamListItem = styled.li`
  position: relative;
  border: 0.25rem solid #00000066;
  border-radius: 1rem;
  background-color: orange;
  color: #222;
  padding: 1rem;

  :before {
    content: '';
    width: 50%;
    height: 100%;
    background-color: pink;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
  }
`;

function DreamListItem(props) {
  // const { dream, onClickingDelete, onClickingEdit } = props;

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
  body: PropTypes.string
};

export default DreamListItem;