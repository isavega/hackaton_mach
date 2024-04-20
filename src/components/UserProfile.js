import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  margin: auto;
`;

const QRCodeImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px;
`;

const TextProfile = styled.p`
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const UserProfile = ({ name, balance, accountNumber, transferData }) => {
  return (
    <Container>
      {/* <AvatarImage src="path/to/generic-avatar.png" alt="Avatar" /> */}
      <TextProfile>{name}</TextProfile>
      <hr />
      <TextProfile>Balance: ${balance} CLP</TextProfile>
      <TextProfile>Account Number: {accountNumber}</TextProfile>
      {/* <QRCodeImage src={transferData.qr} alt="QR Code" /> */}
      <TextProfile>Scan this QR code to transfer funds.</TextProfile>
    </Container>
  );
};

export default UserProfile;
