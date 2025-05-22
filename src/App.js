import React, { useState } from 'react';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import { calculate } from './utils/calculator';
import { Container, Row, Content } from './styles/styles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState('');
  const [history, setHistory] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => prev + num);
  };

  const handleClear = () => {
    setCurrentNumber('');
    setFirstNumber(null);
    setOperation('');
    setHistory('');
  };

  const handleOperation = (op) => {
    if (currentNumber) {
      setFirstNumber(Number(currentNumber));
      setOperation(op);
      setHistory(`${currentNumber} ${op}`);
      setCurrentNumber('');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== null && operation && currentNumber) {
      const result = calculate(firstNumber, Number(currentNumber), operation);
      setHistory(`${history} ${currentNumber} =`);
      setCurrentNumber(result.toString());
      setFirstNumber(null);
      setOperation('');
    }
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Content>
          <button
            onClick={() => setIsDarkTheme((prev) => !prev)}
            style={{
              marginBottom: '10px',
              padding: '10px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: isDarkTheme ? '#444' : '#ddd',
              color: isDarkTheme ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Alternar Tema
          </button>

          <Input value={currentNumber} history={history} />

          <Row>
            <Button label="C" onClick={handleClear} />
            <Button label="/" onClick={() => handleOperation('/')} />
            <Button label="*" onClick={() => handleOperation('*')} />
            <Button label="-" onClick={() => handleOperation('-')} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />
            <Button label="8" onClick={() => handleAddNumber('8')} />
            <Button label="9" onClick={() => handleAddNumber('9')} />
            <Button label="+" onClick={() => handleOperation('+')} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />
            <Button label="5" onClick={() => handleAddNumber('5')} />
            <Button label="6" onClick={() => handleAddNumber('6')} />
            <Button label="=" onClick={handleEquals} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />
            <Button label="2" onClick={() => handleAddNumber('2')} />
            <Button label="3" onClick={() => handleAddNumber('3')} />
            <Button label="0" onClick={() => handleAddNumber('0')} />
          </Row>
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
