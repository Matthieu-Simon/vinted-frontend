import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './assets/pages/Home';
import Offer from './assets/pages/Offer';

import Header from './assets/components/Header';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
