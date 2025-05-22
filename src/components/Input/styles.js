import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 120px; /* Altura fixa para o visor */
  background-color: #000; /* Fundo preto */
  border-radius: 20px;
  padding: 10px 20px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  font-size: 48px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  box-sizing: border-box;

  input {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    font-size: 48px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-align: right;
    padding: 0;
    overflow: hidden; /* Oculta texto que ultrapassa o espaço */
    text-overflow: ellipsis; /* Adiciona "..." caso o texto ultrapasse */
    outline: none;
  }
`;
