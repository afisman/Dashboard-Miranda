import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Layout from './pages/Layout/Layout';
import BookingsPage from './pages/Bookings/BookingsPage';
import RoomsPage from './pages/Rooms/RoomsPage'
import ContactPage from './pages/Contact/ContactPage';
import UsersPage from './pages/Users/UsersPage';
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import BookingPage from './pages/Booking/BookingPage';
import NewRoomPage from './pages/NewRoom/NewRoomPage';
import NewUserPage from './pages/NewUser/NewUserPage';
import { Provider } from 'react-redux';
import { store } from './app/store';
import NewBookingPage from './pages/NewBooking/NewBookingPage';
import EditBookingPage from './pages/NewBooking/EditBookingPage';
import EditRoomPage from './pages/NewRoom/EditRoomPage';
import EditUserPage from './pages/NewUser/EditUserPage';
import RoomDetailsPage from './pages/Room/RoomDetailsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [theme, setTheme] = useState<string>('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }



  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<PrivateRoute ><Layout /></PrivateRoute>}>
              <Route index element={<DashboardPage />} />
              <Route path='bookings' element={<BookingsPage />} />
              <Route path='bookings/newbooking' element={<NewBookingPage />} />
              <Route path='bookings/editbooking/:id' element={<EditBookingPage />} />
              <Route path='bookings/:id' element={<BookingPage />} />
              <Route path='rooms' element={<RoomsPage />} />
              <Route path='rooms/newroom' element={<NewRoomPage />} />
              <Route path='rooms/editroom/:id' element={<EditRoomPage />} />
              <Route path='rooms/:id' element={<RoomDetailsPage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='users' element={<UsersPage />} />
              <Route path='users/newuser' element={<NewUserPage />} />
              <Route path='users/edituser/:id' element={<EditUserPage />} />
            </Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
          <ToastContainer />
        </AuthProvider>
      </Provider>
    </>
  )
}

// if (window.Cypress) {
//   window.store = store;
// }

export default App
