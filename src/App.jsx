import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BudgetCalculator from './Pages/BudgetCalculator';
import SavedPlans from './Pages/SavedPlans';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<BudgetCalculator />} />
        <Route path="/saved-plans" element={<SavedPlans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;