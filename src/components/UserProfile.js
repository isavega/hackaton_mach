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

const UserProfile = ({ name, balance, accountNumber, transferData }) => {
  return (
    <Container>
      {/* <AvatarImage src="path/to/generic-avatar.png" alt="Avatar" /> */}
      <h4>{name}</h4>
      <hr />
      <p>Balance: ${balance} CLP</p>
      <p>Account Number: {accountNumber}</p>
      {/* <QRCodeImage src={transferData.qr} alt="QR Code" /> */}
      <p>Scan this QR code to transfer funds.</p>
    </Container>
  );
};

export default UserProfile;
