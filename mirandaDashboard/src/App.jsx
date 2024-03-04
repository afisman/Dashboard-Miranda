import { Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import Layout from './pages/Layout/Layout';
import BookingsPage from './pages/Bookings/BookingsPage';
import RoomsPage from './pages/Rooms/RoomsPage'
import ProfilePage from './pages/Profile/ProfilePage';
import UsersPage from './pages/Users/UsersPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {localStorage.getItem("isLoggedIn") === "true" ? (
          <Route path='/' element={<Layout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="rooms" element={<RoomsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        ) : (
          <Route path="*" element={<LoginPage />} />
        )}
      </Routes>
    </>
  )
}

export default App
