import React, { useState, useRef } from "react";
import { supabase } from "../api/supabase";
import styled from "styled-components";
import { color } from "../styles/color";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slice/authSlice";

const LogInContainer = styled.div`
  width: 70%;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${color.secondary};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    color: ${color.white};
    font-size: 32px;
  }

  form {
    display: flex;
    flex-direction: column;

    input,
    button {
      margin: 0 auto; /* Centrar el botón */
      margin-bottom: 18px; /* Espacio entre los inputs */
      padding: 12px; /* Aumentar el padding */
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 18px; /* Aumentar el tamaño de la letra */
      width: calc(80% - 24px); /* Ancho de los inputs menos el padding */
    }

    button {
      background-color: ${color.primary};
      color: #fff;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    h1 {
      margin-bottom: 15px;
    }

    form {
      input,
      button {
        padding: 10px;
        font-size: 14px;
      }
    }
  }
`;

const LogIn = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  async function signInUser() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    dispatch(login(data));

    console.log("INICIO DE SESIÓN");
    console.log("DATA: ", data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInUser();
  };

  return (
    <LogInContainer>
      <h1>Inicio Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </LogInContainer>
  );
};

export default LogIn;
