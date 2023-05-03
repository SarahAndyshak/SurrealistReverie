import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { auth } from '../firebase';

const StyledDream = styled.li`
  position: relative;
  // border: 0.25rem solid #00000066;
  border-radius: 45%;
  background-color: #ddd;
  color: #222;
  padding: 1.5rem 2rem;
  z-index: 0;

  filter: drop-shadow(0 0 0.75rem #00000055);

  & > p {
    font-size: 80%;
    text-align: center;
  }

  &:before, :after {
    content: '';
    width: 55%;
    height: 100%;
    background-color: inherit;
    position: absolute;
    top: -3rem;
    left: -3rem;
    border-radius: 50%;
    z-index: -1;
    transform-origin: 52% 48%;
    animation-name: spin;
    animation-duration: 7500ms;
    animation-timing-function: linear;
    animation-play-state: running;
    animation-iteration-count: infinite;
  }
  
  &:after {
    animation-name: spin-cc;
    width: 60%;
    top: unset;
    left: unset;
    bottom: -3rem;
    right: -3rem;
  }
  
  & > .button-area {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;

    &.hidden {
      opacity: 0;
      pointer-events: none;
      tranform: scaleY(20%);

      & button {
        padding: unset;
        height: 0;
      }
    }
  }
`;

function Dream(props) {

  const { onClickDelete, onClickEdit } = props;

  function handleClickEdit() {
    props.onDreamSelection(props.id);
    onClickEdit(props.id)
  }
  
  return (
    <StyledDream>
      <h1>dreamy details</h1>
      <h4>I was in {props.place} for {props.length} with {props.characters}</h4>
      <p>{props.body}</p>
      {/* <p>dream ID: {props.id}</p> */}
      {/* <p style={{fontFamily: 'sans-serif', fontSize: '60%'}}>dreamt by user ID: {props.userId}</p> */}
      <p>dreamt by: {props.email}</p>
      <div className={`button-area${!auth.currentUser ? ' hidden' : ''}`}>
        <Link to="/edit"><button onClick={handleClickEdit}>Revise Reverie</button></Link>
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
  userId: PropTypes.string,
  email: PropTypes.string,
  onClickEdit: PropTypes.func,
  onClickDelete: PropTypes.func,
  onDreamSelection: PropTypes.func
};

export default Dream;