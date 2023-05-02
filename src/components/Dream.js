import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDream = styled.li`
  position: relative;
  // border: 0.25rem solid #00000066;
  border-radius: 40%;
  background-color: #ddd;
  color: #222;
  padding: 1rem 2rem;
  z-index: 0;

  & > p {
    font-size: 0.75rem;
  }

  &:before, :after {
    content: '';
    width: 60%;
    height: 100%;
    background-color: inherit;
    position: absolute;
    top: -3rem;
    left: -3rem;
    border-radius: 50%;
    z-index: -1;
  }

  &:after {
    top: unset;
    left: unset;
    bottom: -3rem;
    right: -3rem;
  }

  & > .button-area {
    width: 100%;
    display: flex;
    gap: 1rem;
  }

`;



function Dream(props) {

  const { onClickDelete, onClickEdit } = props;

  return (
    <StyledDream>
      <h1>dreamy details</h1>
      <h4>I was in {props.place} for {props.length} with {props.characters}</h4>
      <p>{props.body}</p>
      <div className='button-area'>
        <button onClick={() => onClickEdit(props.id)}>Revise Reverie</button>
        <button onClick={() => onClickDelete(props.id)}>Remove Reverie</button>
      </div>
    </StyledDream>
  );
}

Dream.propTypes = {
  place: PropTypes.string,
  length: PropTypes.string,
  characters: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default Dream;