import "./App.css";
import ExpenseForm from "./components/NewExpenseForm/NewExpenseForm";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./screens/Home/Home";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";

import { useLocation } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/Signup/Signup";

function App() {
  const location = useLocation();

  return (
    <>
        <div className="app-container">
          {location.pathname !== "/" &&
            location.pathname !== "/login" &&
            location.pathname !== "/signup" && <Sidebar />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/newexpense" element={<ExpenseForm />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
