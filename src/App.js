// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'
import Setup from './pages/setup/Setup';
import SetupAmount from './pages/setupamount/SetupAmount';
import Category from './pages/Category/Category';
import ContactUs from './pages/ContactUs/ContactUs';

function App() {
  return (
    <>
    

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/setup' element={<Setup />}></Route>
        <Route path='/setup/:type' element={<Setup/>}></Route>
        <Route path='/setup/id/:setupID' element={<SetupAmount/>}></Route>
        <Route path='/category' element={<Category/>} ></Route>
        <Route path='/category/:type' element={<Category />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
