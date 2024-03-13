import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Layout from './pages/Layout/Layout';
import BookingsPage from './pages/Bookings/BookingsPage';
import RoomsPage from './pages/Rooms/RoomsPage'
import ContactPage from './pages/Contact/ContactPage';
import UsersPage from './pages/Users/UsersPage';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme } from './themes';
import { AuthProvider } from './context/auth.context';
import PrivateRoute from './context/PrivateRoute';
import BookingPage from './pages/Booking/BookingPage';
import NewRoomPage from './pages/NewRoom/NewRoomPage';
import NewUserPage from './pages/NewUser/NewUserPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import NewBookingPage from './pages/NewBooking/NewBookingPage';
import EditBookingPage from './pages/NewBooking/EditBookingPage';



function App() {
  const isAuth = localStorage.getItem('isLoggedIn') ? (localStorage.getItem('isLoggedIn') === "true" ? true : false) : false;


  const [theme, setTheme] = useState('light');
  const [auth, setAuth] = useState(isAuth);


  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  useEffect(() => {
    localStorage.setItem('isLoggedIn', auth ? 'true' : 'false');
  }, [auth]);

  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Routes>
              <Route path="/login" element={<LoginPage auth={auth} setAuth={setAuth} />} />
              <Route path='/' element={<PrivateRoute auth={auth}><Layout /></PrivateRoute>}>
                <Route index element={<DashboardPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="bookings/newbooking" element={<NewBookingPage />} />
                <Route path="bookings/editbooking/:id" element={<EditBookingPage />} />
                <Route path="bookings/:id" element={<BookingPage />} />
                <Route path="rooms" element={<RoomsPage />} />
                <Route path="rooms/newroom" element={<NewRoomPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="users/newuser" element={<NewUserPage />} />
              </Route>
              <Route path="/*" element={<Navigate to='/' />}></Route>
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </>
  )
}

export default App
