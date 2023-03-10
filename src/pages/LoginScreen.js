import React, {useState} from 'react';
import "./LoginScreen.css"
import SignInScreen from "./SignInScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false)
  const [input, setInput] = useState('')
  console.log(input)
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className='loginScreen__logo'
             src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
             alt="Logo"
        />
        <button
          onClick={()=> setSignIn(true)}
          className='loginScreen__btn'>
          Sign In
        </button>

        <div className="loginScreen__gradient"/>
        <div className="loginScreen__body">
          {signIn ? (<SignInScreen/>) :(<>

            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>

            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder='Email Address'
                       onChange={(e=> setInput(e.target.value))}
                       value={input}/>
                <button
                  onClick={()=> setSignIn(true)}
                  className="loginScreen__input__btn">
                  GET STARTED
                </button>
              </form>
            </div>
            </>)
           }
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
