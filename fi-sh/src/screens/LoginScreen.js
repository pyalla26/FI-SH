import React, { useState } from "react";
import "./LoginScreen.css";
import Logo from "../images/logoxl.png";
import SignInScreen from "./SignInScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreenBackground">
        <img className="loginScreenLogo" src={Logo} alt="login logo" />
        <button onClick={() => setSignIn(true)} className="loginScreenButton">
          Sign In
        </button>
        <div className="loginScreenGradient" />
        <div className="loginScreenBody">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Countless films, shows so much more.</h1>
              <h2>Watch anywhere, Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreenInput">
                <form>
                  {/* <input type="email" placeholder="Email Address" /> */}
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreenGetStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
