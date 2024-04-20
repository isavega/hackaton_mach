import React from "react";
import styled from "styled-components";
import { transactions } from "../utils/dummy_data";

const TransactionHistory = () => {
  const TransactionList = styled.ul`
    list-style: none;
    padding: 10px 0;
    margin: 0;
    background-color: #f9f9f9;
    border-radius: 15px;
    font-size: 1.2rem;
    overflow-x: auto;
    max-width: 100%;

    h3 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
      @media (max-width: 768px) {
        font-size: 0.8rem; /* Tamaño de fuente más pequeño en dispositivos pequeños */
      }
    }
  `;

  const TransactionItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    transition: background-color 0.3s ease;

    &.positive {
      color: #2ad2c9;
    }

    &.negative {
      color: #d51408;
    }

    &:hover {
      background-color: #f0f0f0;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem; /* Tamaño de fuente más pequeño en dispositivos pequeños */
      padding: 10px 5px;
    }
  `;

  const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    font-weight: bold;
    color: #333;
    @media (max-width: 768px) {
      font-size: 0.8rem; /* Tamaño de fuente más pequeño en dispositivos pequeños */
      padding: 10px 5px;
    }
  `;

  const TableData = styled.span`
    flex: 1;
    text-align: center;
    white-space: nowrap;
    margin: 0 5px;
  `;

  return (
    <div className="transaction-history">
      <TransactionList>
        <h3>Historial de Transacciones 🤑</h3>
        <TableHeader>
          <TableData>Tipo</TableData>
          <TableData>Monto</TableData>
          <TableData>Origen/Destino</TableData>
        </TableHeader>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            className={transaction.amount >= 0 ? "positive" : "negative"}
          >
            <TableData>{transaction.type}</TableData>
            <TableData>
              {transaction.amount >= 0 ? "+" : "-"}$
              {Math.abs(transaction.amount)}
            </TableData>
            <TableData>{transaction.sourceOrDestination}</TableData>
          </TransactionItem>
        ))}
      </TransactionList>
    </div>
  );
};

export default TransactionHistory;
