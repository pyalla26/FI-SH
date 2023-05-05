import React, { useRef } from "react";
import "./SignInScreen.css";
import { auth } from "../firebase";
//import { login, userSlice } from "../features/userSlice";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        auth
          .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          )
          .then((authUser) => {
            console.log(authUser);
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signInScreenGrey">New to FI-SH? </span>
          <span className="signInScreenLink" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
