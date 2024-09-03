import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

import Home from './assets/pages/Home/Home';
import Offer from './assets/pages/Offer/Offer';
import Signup from './assets/pages/Signup/Signup';
import Login from './assets/pages/Login/Login';
import Publish from './assets/pages/Publish/Publish';
import Payment from "./assets/pages/Payment/Payment";

import Header from './assets/components/Header/Header';
import './App.css';

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const handleToken = (token) => {
    if(token) {
      Cookies.set("userToken", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <>
    <Router>
      <Header handleToken={handleToken} userToken={userToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer userToken={userToken} />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />}  />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish userToken={userToken} />} />
        <Route path="/payment" element={<Payment userToken={userToken} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
