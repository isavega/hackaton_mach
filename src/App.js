import React, { useState } from "react";
import logoMach from "./logo-mach-blanco.png";
import "./App.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Button from "./components/Button";

function App() {
  const [showLogIn, setShowLogIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoMach} className="App-logo" alt="logo" />
        <p>Bienvenido a Mach!</p>
        <Button onClick={() => setShowLogIn(!showLogIn)}>
          {showLogIn ? "Crear cuenta ❤️" : "Iniciar sesión 😇"}
        </Button>
        {showLogIn ? <LogIn /> : <SignUp />}
      </header>
    </div>
  );
}

export default App;
