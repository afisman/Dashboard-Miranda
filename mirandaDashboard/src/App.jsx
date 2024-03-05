import { Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Layout from './pages/Layout/Layout';
import BookingsPage from './pages/Bookings/BookingsPage';
import RoomsPage from './pages/Rooms/RoomsPage'
import ProfilePage from './pages/Profile/ProfilePage';
import UsersPage from './pages/Users/UsersPage';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './themes';
import { AuthProvider } from './context/auth.context';
import RequireAuth from './context/RequireAuth';








function App() {

  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <>
              <Route path='/' element={<RequireAuth><Layout /></RequireAuth>}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="rooms" element={<RoomsPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="users" element={<UsersPage />} />
              </Route>
              <Route path="/*" Navigate element={<LoginPage />} />
            </>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
