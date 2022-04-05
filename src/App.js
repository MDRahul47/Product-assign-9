
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <div className="brand-bg">
        <div className="footer container d-flex justify-content-center align-items-center">
          <div className="text-center">
            <p className="text-white m-0 p-0">Copyright © 2022 || <span className="brand-color">Car4You.netlify.app</span></p>
            <p className="text-white m-0 p-0 mt-2"><small>Narayangonj, Bangladesh</small></p>
            <p className="text-white m-0 p-0 mt-2"><small>All Rights Reserved.</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
