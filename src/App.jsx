import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Login from './pages/Login';
import Registration from './pages/Registration';  
import Reset from "./pages/Reset";
import Confirm from "./pages/Confirm";
import NewPassword from "./pages/NewPassword";
import ChatApp from "./pages/ChatApp";

function App() {
  return (
    <div className="App">
      {/* <header>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>
      </header> */}
      <Routes>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/reset-password" element={ <Reset /> }/>
        <Route path="/register" element={ <Registration /> }/>
        <Route path="/confirm" element={ <Confirm /> }/>
        <Route path="/new-password" element={<NewPassword />}/>
        <Route path="/messenger" element={<ChatApp />} />
      </Routes>
    </div>
  );
}

export default App;
