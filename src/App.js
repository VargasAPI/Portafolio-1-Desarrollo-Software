import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CommentsUsers from "./pages/CommentsUsers";
import MorePersonalInformation from "./pages/More";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Comments" element={<CommentsUsers />} />
         <Route path="/More" element={<MorePersonalInformation />} />

      </Routes>
    </Router>
  );
}

export default App;
