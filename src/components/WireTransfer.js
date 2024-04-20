import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button/Button";
import Confetti from "react-confetti";

const WireTransfer = ({ balance }) => {
  const [amount, setAmount] = useState("");
  const [formattedAmount, setFormattedAmount] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [rut, setRut] = useState("");
  const [formattedRut, setFormattedRut] = useState("");
  const [selectedBank, setSelectedBank] = useState("BANCO BCI");
  const [error, setError] = useState("");
  const [confetti, setConfetti] = useState(false);

  const banks = [
    "BANCO BCI 💙💚❤️ ",
    "MACH 💜",
    "Banco de Chile",
    "BancoEstado",
    "Banco Santander",
    "Banco Itaú",
    "Scotiabank",
    "Banco Security",
    "Banco Falabella",
    "Banco Ripley",
    "Banco Consorcio",
    "Banco Internacional",
    "Banco Corpbanca",
    "Banco BBVA",
    "Banco Paris",
    "Banco Penta",
  ];

  const handleAmountChange = (e) => {
    const inputValue = e.target.value.replace(/[^\d]/g, ""); // Eliminar caracteres no numéricos
    setAmount(inputValue);
    setFormattedAmount(formatCurrency(inputValue));
  };

  const handleRutChange = (e) => {
    const inputValue = e.target.value.replace(/[^\dKk]/g, ""); // Permitir solo dígitos y 'K'
    setRut(inputValue);
    setFormattedRut(formatRut(inputValue));
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError("Ingrese un monto válido.");
    } else if (parseFloat(amount) > balance) {
      setError("El monto de la transferencia excede el saldo disponible.");
    } else if (!recipientName.trim() || !accountNumber.trim() || !rut.trim()) {
      setError("Complete todos los campos del destinatario.");
    } else {
      setError("");
      const transferData = {
        amount: parseFloat(amount),
        formattedAmount,
        recipient: {
          name: recipientName,
          accountNumber,
          rut,
          bank: selectedBank,
        },
      };

      setConfetti(true);

      setAmount("");
      setFormattedAmount("");
      setRecipientName("");
      setAccountNumber("");
      setRut("");
      setFormattedRut("");
      setSelectedBank("BANCO BCI");
    }
  };

  const formatCurrency = (value) => {
    const clpFormat = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    });
    return clpFormat.format(parseFloat(value));
  };

  const formatRut = (rut) => {
    rut = rut.replace(/[^\dKk]/g, ""); // Permitir solo dígitos y 'K'
    const rutDigits = rut.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const rutVerifDigit = rut.slice(-1).toUpperCase();
    return rutDigits + "-" + rutVerifDigit;
  };

  return (
    <TransferContainer>
      {confetti && <Confetti width={2560} height={1600} />}
      <h3>Realizar Transferencia</h3>
      <TransferFormStyled onSubmit={handleTransfer}>
        <InputLabel>
          Monto a Transferir
          <InputField
            type="text"
            value={formattedAmount}
            onChange={handleAmountChange}
          />
        </InputLabel>
        <InputLabel>
          Nombre del Destinatario
          <InputField
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          />
        </InputLabel>
        <InputLabel>
          Número de Cuenta del Destinatario
          <InputField
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </InputLabel>
        <InputLabel>
          RUT del Destinatario
          <InputField
            type="text"
            value={formattedRut}
            onChange={handleRutChange}
          />
        </InputLabel>
        <InputLabel>
          Banco del Destinatario
          <SelectField
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            {banks.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </SelectField>
        </InputLabel>
        <Button type="submit">Transferir</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </TransferFormStyled>
    </TransferContainer>
  );
};

const TransferContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const TransferFormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 10px;
  font-size: 18px; /* Tamaño de letra más pequeño */
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-top: 5px;
  font-size: 18px; /* Tamaño de letra más pequeño */
`;

const SelectField = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-top: 5px;
  font-size: 14px; /* Tamaño de letra más pequeño */
`;

const ErrorMessage = styled.div`
  color: #d51408;
  margin-top: 10px;
  font-size: 14px; /* Tamaño de letra más pequeño */
`;

export default WireTransfer;
