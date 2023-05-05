import React from "react";
import "./ProfileScreen.css";
import NavbarComponent from "../NavbarComponent";
import Profile from "../images/profile.png";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import PlanScreen from "./PlanScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <NavbarComponent />
      <div className="profileScreenBody">
        <h1>Edit Profile</h1>
        <div className="profileScreenInfo">
          <img src={Profile} alt="profile logo" />
          <div className="profileScreenDetails">
            <h2>{user.email}</h2>
            <div className="profileScreenPlans">
              <h3>Plans</h3>

              <PlanScreen />
            </div>
            <button
              onClick={() => auth.signOut()}
              className="profileScreenSignOut"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
