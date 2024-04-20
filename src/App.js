import React, { useState, useEffect } from "react";
import logoMach from "./logo-mach-blanco.png";
import "./App.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Button from "./components/Button/Button";
import { useSelector } from "react-redux";
import LogOutButton from "./components/LogOutButton";
import UserProfile from "./components/UserProfile/UserProfile";
import { supabase } from "./api/supabase";

async function updateUserMetadata(userId, auth) {
  try {
    await supabase.auth.updateUser({
      id: userId,
      user_metadata: {
        ...auth.user.user.user_metadata,
        flag_user_innactive: true,
      },
    });
  } catch (error) {
    console.error("Error updating user metadata:", error.message);
  }
}

function App() {
  const [showLogIn, setShowLogIn] = useState(false);

  const auth = useSelector((state) => state.auth);
  const inactiveMonths = 12;

  useEffect(() => {
    if (auth.isAuthenticated) {
      const lastSignIn = auth.user.user.last_sign_in_at;
      if (lastSignIn) {
        const lastSignInDate = new Date(lastSignIn);
        const currentDate = new Date();
        const diff = currentDate - lastSignInDate;
        const diffInMonths = diff / (1000 * 60 * 60 * 24 * 30);
        if (diffInMonths > inactiveMonths) {
          updateUserMetadata(auth.user.user.id, auth);
        }
      }
    }
  }, [auth]);

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

        <p>¡Bienvenido!</p>
        {!auth.isAuthenticated && (
          <Button onClick={() => setShowLogIn(!showLogIn)}>
            {showLogIn ? "Crear cuenta ❤️" : "Iniciar sesión"}
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
