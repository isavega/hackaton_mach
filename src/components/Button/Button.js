import styled from "styled-components";
import { color } from "../../styles/color";

const Button = styled.button`
  margin: 0 auto; /* Centrar el botón */
  margin-bottom: 18px; /* Espacio entre los botones */
  padding: 12px; /* Aumentar el padding */
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 18px; /* Aumentar el tamaño de la letra */
  width: calc(40% - 24px); /* Ancho del botón menos el padding */
  background-color: ${(props) =>
    props.primary ? color.primary : color.secondary};
  color: ${(props) => (props.primary ? "#fff" : color.white)};
  cursor: pointer;
  transition: transform 0.3s ease; /* Transición para el efecto de expansión */

  &:hover {
    background-color: ${color.primary};
    transform: scale(1.1); /* Expandir el botón al 110% del tamaño original */
  }
`;

export default Button;
