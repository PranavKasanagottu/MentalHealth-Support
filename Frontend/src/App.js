import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Chat from './components/Chat';
import Form from './components/Form';
import MoodTracker from './components/MoodTracker';
import Resources from './components/Resources';

import './App.css'; // Optional: Global styles for your app

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar will be visible on all pages */}
        <Navbar />
        
        {/* Main content changes based on the route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/form" element={<Form />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
