import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Layout from './pages/Layout/Layout';
import BookingsPage from './pages/Bookings/BookingsPage';
import RoomsPage from './pages/Rooms/RoomsPage'
import ContactPage from './pages/Contact/ContactPage';
import UsersPage from './pages/Users/UsersPage';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './themes';
import { AuthProvider } from './context/auth.context';
import PrivateRoute from './context/PrivateRoute';
import BookingPage from './pages/Booking/BookingPage';
import NewRoomPage from './pages/NewRoom/NewRoomPage';
import NewUserPage from './pages/NewUser/NewUserPage';


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
              <Route path='/' element={<PrivateRoute><Layout /></PrivateRoute>}>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="bookings/:id" element={<BookingPage />} />
                <Route path="rooms" element={<RoomsPage />} />
                <Route path="rooms/newroom" element={<NewRoomPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="users/newuser" element={<NewUserPage />} />

              </Route>
            </>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default App
