import React, { useState } from "react";
import logoMach from "./logo-mach-blanco.png";
import "./App.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Button from "./components/Button";
import { useSelector } from "react-redux";
import LogOutButton from "./components/LogOutButton";
import UserProfile from "./components/UserProfile";

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
        {!auth.isAuthenticated && (
          <Button onClick={() => setShowLogIn(!showLogIn)}>
            {showLogIn ? "Crear cuenta ❤️" : "Iniciar sesión 😇"}
          </Button>
        )}
        {auth.isAuthenticated ? (
          <UserProfile
            name={auth.user.user.user_metadata.firstName}
            balance={auth.user.user.user_metadata.balance_cl}
            accountNumber={auth.user.user.user_metadata.account_number}
          />
        ) : showLogIn ? (
          <LogIn />
        ) : (
          <SignUp />
        )}
      </header>
    </div>
  );
}

export default App;
