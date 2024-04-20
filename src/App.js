import React, { useState } from "react";
import logoMach from "./logo-mach-blanco.png";
import "./App.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Button from "./components/Button";
import { useSelector } from "react-redux";
import LogOutButton from "./components/LogOutButton";

function App() {
  const [showLogIn, setShowLogIn] = useState(false);

  const auth = useSelector((state) => state.auth);

  console.log("AUTH: ", auth);

  console.log("USUARIO AUTENTICADO: ", auth.isAuthenticated);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoMach} className="App-logo" alt="logo" />
        {auth.isAuthenticated && (
          <>
            <p>¡Hola, {auth.user.user.user_metadata.firstName}!</p>

            <LogOutButton />
          </>
        )}

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
