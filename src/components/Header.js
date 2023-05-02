import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { auth } from "./../firebase.js";
import { signOut } from "firebase/auth";


const StyledHeader = styled.header`
  width: 100%;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: chartreuse;
  color: white;

  & > h1 {
    font-size: 2.5rem;
  }

  & > .link-area {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
`;

function Header(){
  const [signOutSuccess, setSignOutSuccess] = useState(null);
  
  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  if(auth.currentUser == null) {
    return (
      <StyledHeader>
        <h1>Surrealist Reveries</h1>
        <ul className='link-area'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </StyledHeader>
    )
  } else {
    return (
      <StyledHeader>
        <div id='title-area'>
          Surrealist Reveries
        </div>
        <ul className='link-area'>
          <li>
            <p><Link to="/">Home</Link></p>
          </li>
          <li>
            <p><Link to="/add-new">Add New Dream</Link></p>
          </li>
          <li>
            <button onClick={doSignOut}>Sign out</button>
          </li>
        </ul>
      </StyledHeader>
    );
  }
}

export default Header;