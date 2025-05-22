import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #efefef;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.cardBackground || '#FFFFFF'};
  width: 100%;
  max-width: 350px; /* Limite máximo da largura (calculadora em formato de celular) */
  height: 600px; /* Altura fixa */
  border-radius: 30px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    height: 500px; /* Reduz a altura para telas menores */
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-bottom: 5px; /* Reduz o espaço entre linhas em telas menores */
  }
`;
