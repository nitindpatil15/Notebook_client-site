import "./App.css";
import Header from "./Component/Header";
import Nav from "./Component/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Component/Profile";
import VideoItems from "./Component/VideoItems";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/videoItems" element={<VideoItems />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
