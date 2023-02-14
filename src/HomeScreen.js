import React from 'react';
import './HomeScreen.css'
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";


const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Nav/>
      <Banner/>
    </div>
  );
};

export default HomeScreen;
