import { Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/Login/LoginPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {localStorage.getItem("isLoggedIn") === "true" ? (
          <Route element={<Layout />}>
            <Route path="home" element={<DashboardPage />} />
          </Route>
        ) : (
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </>
  )
}

export default App
