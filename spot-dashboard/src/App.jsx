import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login.jsx";  //importing the login page
import Dashboard from "../Pages/Dashboard.jsx";  //importaing the dashboard page
import UserInfo from "../Pages/User-information.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-info" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
