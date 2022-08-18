import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Users from './pages/Users'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/users' element={<Users />} />
      <Route exact path='/' element={ <Navigate to='/login' /> } />
    </Routes>
  );
}

export default App;
