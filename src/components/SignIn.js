import { auth } from "./../firebase.js";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

const StyledSignin = styled.div`

`;

function SignIn(props) {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const navigate = useNavigate();

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(
          `You've successfully signed up, ${userCredential.user.email}!`
        );
        navigate('/');
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}!`);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`);
        props.handleSettingCurrentUser(userCredential.user);
        navigate('/'); // this is where we call navigate to go home
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  return (
    <StyledSignin>
      <h1>Sign up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>
      <h1>Sign In</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input type="text" name="signinEmail" placeholder="email" />
        <input type="password" name="signinPassword" placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>
    </StyledSignin>
  );
}

SignIn.propTypes = {
  handleSettingCurrentUser: PropTypes.func,
}

export default SignIn