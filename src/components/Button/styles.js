import styled from 'styled-components';

export const ButtonContainer = styled.button`
  flex: 1; /* Faz o botão ocupar o espaço disponível de forma proporcional */
  height: 70px; /* Altura fixa */
  margin: 5px; /* Espaço entre os botões */
  border-radius: 50%; /* Deixa os botões arredondados */
  border: none;
  background-color: ${(props) => props.theme.primary || '#D4D4D2'};
  color: ${(props) => props.theme.text || '#000'};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.primaryHover || '#C6C6C6'};
  }

  &:active {
    transform: scale(0.95); /* Animação ao pressionar */
  }
`;
