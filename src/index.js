import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './component/login/login';
import Main from './component/main/main';

const url = "http://localhost:8090"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login url={url}/>} />
        <Route path="*" element={<Main url={url}/>} />
      </Routes>
    </Router>
  </>
);


