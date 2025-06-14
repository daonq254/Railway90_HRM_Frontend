import Home from "./../Pages/Home";
import About from "./../Pages/About";
import AccountManagement from "./../Pages/AccountManagement";
import DepartmentManagement from "./../Pages/DepartmentManagement";
import Login from "./../Pages/Login";
import SignUp from "./../Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Error from "../Pages/Error";
import AccountDetail from "../Pages/AccountDetail";

let routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/AccountManagement" element={<AccountManagement />} />
    <Route path="/DepartmentManagement" element={<DepartmentManagement />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Sign_Up" element={<SignUp />} />
    <Route path="/accountDetail/:idParam" element={<AccountDetail />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export { routes };
