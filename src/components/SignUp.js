import React, { useState, useRef } from "react";
import { supabase } from "../api/supabase";
import styled from "styled-components";
import { color } from "../styles/color";

const SignUpContainer = styled.div`
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
    font-size: 52px;
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

    .phoneNumberContainer {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 5px;

      span {
        margin-right: 5px;
      }

      input {
        flex: 1;
        border: none;
        padding: 0;
      }
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idDocument, setIdDocument] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+569 ");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const idDocumentRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const formatRut = (value) => {
    // Eliminar caracteres que no sean números ni letras K
    const cleanedValue = value.replace(/[^\dkK]/g, "");

    // Separar números y dígito verificador
    const rutDigits = cleanedValue.slice(0, -1);
    const dv = cleanedValue.slice(-1);

    // Formatear rut con puntos y guión
    const formattedRut = rutDigits
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      .concat(`-${dv.toUpperCase()}`);

    return formattedRut;
  };

  const handleIdDocumentChange = (e) => {
    setIdDocument(formatRut(e.target.value));
  };

  const generateAccountNumber = (rut) => {
    return 1;
  };

  async function signUpNewUser() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          idDocument,
          phoneNumber,
          balance_clp: 0,
          account_number: generateAccountNumber(idDocument),
        },
      },
    });

    console.log("DATA: ", data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpNewUser();
  };

  const handleKeyDown = (e, currentRef, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (nextRef && nextRef.current) {
        nextRef.current.focus();
      } else {
        currentRef.current.blur();
      }
    }
  };

  return (
    <SignUpContainer>
      <h1>Crea una cuenta!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre(s)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, firstNameRef, lastNameRef)}
          ref={firstNameRef}
        />
        <input
          type="text"
          placeholder="Apellido(s)"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, lastNameRef, idDocumentRef)}
          ref={lastNameRef}
        />
        <input
          type="text"
          placeholder="Documento de Identidad (RUT chileno)"
          value={idDocument}
          onChange={handleIdDocumentChange}
          onKeyDown={(e) => handleKeyDown(e, idDocumentRef, phoneNumberRef)}
          ref={idDocumentRef}
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, phoneNumberRef, emailRef)}
          ref={phoneNumberRef}
          prefix="+569"
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, emailRef, passwordRef)}
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, passwordRef, null)}
          ref={passwordRef}
        />

        <button type="submit">Registrarse</button>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
