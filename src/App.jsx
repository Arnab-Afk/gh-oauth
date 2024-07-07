import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Redirect from './components/redirect'
import Sidebar from './components/sidebar'
import Starred from './components/starred'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const code = localStorage.getItem('github-code');
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    axios.post('https://github.com/login/oauth/access_token', {
      client_id: import.meta.env.CLIENT_ID,
      client_secret: import.meta.env.CLIENT_SECRET,
      code,
  }).then(response => {
      const accessToken = response.data.access_token;
      console.log('Access token:', accessToken);
      
  }).catch(error => {
      console.error('Error getting access token:', error);
  });
  }, []);
  console.log('code', code);
  return (
    <>
      <Router>
      <Routes>
        <Route path="/auth/github/callback" element={<Redirect />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path ="/starred" element={<Starred/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
