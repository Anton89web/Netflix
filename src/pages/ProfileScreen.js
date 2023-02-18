import React from 'react';
import "./ProfileScreen.css"
import Nav from "../Components/Nav";
import {useSelector} from "react-redux";
import {selectUser} from "../features/counter/userSlice";
import {auth} from "../firebase";

const ProfileScreen = () => {
  const {user} = useSelector(selectUser)
  console.log(user)
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            className='profileScreen__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
            alt="Avatar Logo"/>
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plants">
              <h3>Plans</h3>
              <button
                onClick={()=> auth.signOut()}
                className="profileScreen__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProfileScreen;
