import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Main from './components/Main';
import Unverified from './components/Unverified';
import Verified from './components/Verified';
import Postevent from './components/Postevent';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/main' element={<Main />} />
        <Route path='/unverified' element={<Unverified />} />
        <Route path='/verified' element={<Verified />} />
        <Route path='/postevent' element={<Postevent />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
