import "./App.css";
import ExpenseForm from "./components/NewExpenseForm/NewExpenseForm";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./screens/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/newexpense" element={<ExpenseForm/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
