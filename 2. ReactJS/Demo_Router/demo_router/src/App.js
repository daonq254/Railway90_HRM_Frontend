import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AccountManagement from "./Pages/AccountManagement";
import DepartmentManagement from "./Pages/DepartmentManagement";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Error from "./Pages/Error";
import Menu from "./Components/Menu";
import { routes } from "./Router/Routes";

function App() {
  return (
    <div className="App">
      {/* Menu */}
      <Menu />
      {/* Routes, Content Page */}
      {routes}
    </div>
  );
}

export default App;
