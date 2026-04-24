import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Centers from './pages/Centers';
import Subscriptions from './pages/Subscriptions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/centers" element={<Centers />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </Router>
  );
}

export default App;
