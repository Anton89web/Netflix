import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const hideNavBar = ()=> (
    window.scrollY > 100 ? setShow(true) : setShow(false)
  )

  useEffect(() => {
    window.addEventListener('scroll', hideNavBar)
    return () => window.removeEventListener('scroll', hideNavBar)
  }, []);


  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={()=> navigate('/')}
          className='nav__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"/>
        <img
          onClick={()=> navigate('/profile')}
          className='nav__avatar'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/800px-User-avatar.svg.png"
          alt="Avatar Logo"/>
      </div>
    </div>
  );
};

export default Nav;
