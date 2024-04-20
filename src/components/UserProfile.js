import React, { useState } from "react";
import styled from "styled-components";
import TransactionHistory from "./TransactionHistory";
import Button from "./Button";
import WireTransfer from "./WireTransfer";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  width: 50%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const TextProfile = styled.p`
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const UserProfile = ({ name, balance, accountNumber, transferData }) => {
  const [showTransactions, setShowTransactions] = useState(false);
  const [showWireTransfer, setShowWireTransfer] = useState(false);

  return (
    <Container>
      <TextProfile>{name}</TextProfile>
      <hr />
      <TextProfile>Balance: ${balance || 1000} CLP</TextProfile>
      <TextProfile>Account Number: {accountNumber}</TextProfile>

      <Button onClick={() => setShowTransactions(!showTransactions)}>
        {showTransactions ? "Ocultar" : "Ver"} Movimientos
      </Button>
      <Button onClick={() => setShowWireTransfer(!showWireTransfer)}>
        Transferencia Bancaria
      </Button>
      {showTransactions && <TransactionHistory />}
      {showWireTransfer && <WireTransfer balance={balance} />}
    </Container>
  );
};

export default UserProfile;
