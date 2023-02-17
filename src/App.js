import React from 'react';
import './App.css';
import HomeScreen from "./pages/HomeScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";


function App() {
  const user = null
  return (
    <div className="App">
      {!user ? (<LoginScreen/>) : (
        <BrowserRouter>
          <Routes>
            {/*<Route path="/" element={}>*/}
            <Route index element={<HomeScreen/>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
