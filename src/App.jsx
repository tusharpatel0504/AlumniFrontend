import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import AlumniDashboard from "./pages/AlumniDashboard";
import AlumniProfile from "./pages/AlumniProfile";
import AlumniJobs from "./pages/AlumniJobs";
import AlumniRequest from "./pages/AlumniRequest";
import AlumniSession from "./pages/AlumniSession";

function AppContent() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname.startsWith("/alumnidashboard");

  return (
    <>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Alumni Dashboard with nested routes */}
        <Route path="/alumnidashboard" element={<AlumniDashboard />}>
          <Route index element={<AlumniProfile />} />
          <Route path="profile" element={<AlumniProfile />} />
          <Route path="jobs" element={<AlumniJobs />} />
          <Route path="requests" element={<AlumniRequest />} />
          <Route path="sessions" element={<AlumniSession />} />
        </Route>
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
