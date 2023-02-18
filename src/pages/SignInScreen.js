import React, {useRef} from 'react';
import "./SignInScreen.css"
import {auth} from "../firebase";

const SignInScreen = () => {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)


  const register = e => {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch(error => alert(error))
  }

  const signIn = e => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch(error => alert(error))
  }

  return (
    <div className="signInScreen">
      <form >
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email"/>
        <input ref={passwordRef} placeholder="Password" type="password"/>
        <button
          onClick={e => signIn(e)}
          type='submit'>Sign In</button>
      </form>

      <h4>
        <span className='signInScreen__gray'>New to Netflix?</span>
        <span
          onClick={e => register(e)}
          className="signInScreen__link">Sign Up now.</span>
      </h4>
    </div>
  );
};

export default SignInScreen;
