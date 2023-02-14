import React, {useEffect, useState} from 'react';
import "./Nav.css"

const Nav = () => {
  const [show, setShow] = useState(true);

  const hideNavBar = ()=> (
    window.scrollY > 100 ? setShow(false) : setShow(true)
  )

  useEffect(() => {
    window.addEventListener('scroll', hideNavBar)
    return () => window.removeEventListener('scroll', hideNavBar)
  }, []);


  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className='nav__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"/>
        <img
          className='nav__avatar'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
          alt="Avatar Logo"/>
      </div>
    </div>
  );
};

export default Nav;
