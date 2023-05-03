import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { auth } from "./../firebase.js";
import { signOut } from "firebase/auth";
import PropTypes from "prop-types";

const pause = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const StyledHeader = styled.header`
  width: 100vw;
  max-width: 100vw;
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: chartreuse;
  color: white;

  & li {
    width: max-content;
  }

  & > h1 {
    font-size: 2.5rem;
  }

  & > .link-area {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    & button {
      height: 4rem;
      font-size: 1.25rem;
      padding: 0 1rem;
    }
  }
`;

function Header(props){

  function createTitle(titleText) {
    const titleArea = document.getElementById("title-area");
    const titleArray = titleText.split("");
    for (let i = 0; i < titleArray.length; i++) {
      let printedChar;
      if (titleArray[i] === " ") {
        printedChar = "&nbsp;";
      } else {
        printedChar = titleArray[i];
      }
      titleArea.innerHTML += `
        <span class='title-letter' id='title-letter-${i}'>
          ${printedChar}
        </span>
      `;
    }
  }
  
  async function revealTitle(options) {
    // options = {
    //   revealSpeed: '150',
    //   letterAnimationSpeed: '400'
    // }
    document.documentElement.style.setProperty(
      "--letter-animation-speed",
      options.letterAnimationSpeed + "ms"
    );
    const titleArea = document.getElementById("title-area");
    const titleArray = titleArea.innerText.split("");
    for (let i = 0; i < titleArray.length; i++) {
      const currentLetter = document.getElementById(`title-letter-${i}`);
      currentLetter.classList.add("revealed");
      await pause(options.revealSpeed);
    }
  }

  function animateTitle() {
    createTitle('Surrealist Reveries');
    revealTitle({
      revealSpeed: '150',
      letterAnimationSpeed: '400'
    });
  }

  useEffect(() => {
    // animateTitle();
  });

  const [signOutSuccess, setSignOutSuccess] = useState(null);
  
  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
        props.handleSettingCurrentUser(null);
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  if(!props.currentUser) {
    return (
      <StyledHeader>
        <div id='title-area'>
        Surrealist Reveries
        </div>
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
            <Link to="/add-new">Add New Dream</Link>
          </li>
          <li>
            <button onClick={doSignOut}>Sign out</button>
          </li>
        </ul>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  currentUser: PropTypes.object,
}

export default Header;