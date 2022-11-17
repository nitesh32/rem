import "./App.css";
import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" exact element={<Home/>} /> */}
        <Route path="/" exact element={<About />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/annual" element={<AnnualReport/>} />
        <Route path="/team" element={<Teams/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
