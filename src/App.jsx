import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursesList from "./components/CoursesList/CoursesList";
import DashboardWithNavbar from "./components/DashboardWithNavbar";
import CourseDetails from "./components/CourseDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesList />} />
        <Route path="/dashboard" element={<DashboardWithNavbar />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
        <Route path="/CourseDetails/:courseId" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
