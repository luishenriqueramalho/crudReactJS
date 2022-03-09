import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserList />} />
        <Route path='add-animal' />
      </Routes>
    </Router>
  );
}

export default App;
