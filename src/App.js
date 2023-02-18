import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from "./pages/HomeScreen";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/counter/userSlice";
import ProfileScreen from "./pages/ProfileScreen";


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        dispatch(login({
        uid: userAuth.uid,
        email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })
    console.log(user)
    return unsubscribe
  }, [dispatch])

  return (
    <div className="App">
      {!user ? (<LoginScreen/>) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/profile" element={<ProfileScreen/>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
