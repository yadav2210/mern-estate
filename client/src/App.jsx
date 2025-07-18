import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";  
import React from "react";
import Header from "./components/Header";
const App = () => {
  return (
 <BrowserRouter>
 <Header />
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="*" element={<Home />} /> 
 </Routes>
 </BrowserRouter>
  );
}
export default App;