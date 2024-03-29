
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/appointment" element={<Appointment></Appointment>}/>
      <Route path="/reviews" element={<Reviews></Reviews>}/>
      <Route path="/contactUs" element={<ContactUs></ContactUs>}/>
      <Route path="/logIn" element={<LogIn></LogIn>}/>
     
      </Routes>
    </div>
  );
}

export default App;
