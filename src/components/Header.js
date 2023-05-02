import React from "react";
// import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: chartreuse;
  color: white;

  & > h1 {
    font-size: 2.5rem;
  }
`;

function Header(){
  return (
    <StyledHeader>
      <h1>Surrealist Reverie</h1>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li> */}
      </ul>
    </StyledHeader>
  );
}

export default Header;