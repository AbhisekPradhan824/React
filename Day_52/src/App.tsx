import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToDoLogin } from "./components/todo-login";
import { ToDoRegister } from "./components/todo-register";
import { ToDoAppointmentsHome } from "./components/todo-appointments-home";

function App() {
  return (
    <div className="container-fluid">
      <div className="shade">
        <header className="p-2 bg-dark text-white text-center">
          <h1>To-DO- Your Apointments</h1>
        </header>
        <section>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ToDoLogin />} />
              <Route path="login" element={<ToDoLogin />} />
              <Route path="/register" element={<ToDoRegister />} />
              <Route path="/appointments" element={<ToDoAppointmentsHome />} />
            </Routes>
          </BrowserRouter>
        </section>
      </div>
    </div>
  );
}

export default App;
