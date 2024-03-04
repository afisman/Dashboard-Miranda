import { Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Layout from './pages/Layout/Layout';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {localStorage.getItem("isLoggedIn") === "true" ? (
          <Route path='/' element={<Layout />}>

            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        ) : (
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </>
  )
}

export default App
