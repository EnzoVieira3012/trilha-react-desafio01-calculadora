import React from 'react';
import { InputContainer } from './styles';

const Input = ({ value, history }) => {
  return (
    <InputContainer>
      <div className="history">{history}</div>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;
