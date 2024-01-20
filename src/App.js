import Input from './components/Input'
import Button from './components/Button'
import { ButtonEqual } from './components/ButtonEqual/style';
import { CalcDiv } from './components/CalcDiv/style';
import { ButtonsDiv } from './components/ButtonsDiv/style';
import Image from './components/ImgElement';
import { Container, Content, Row } from './styles';
import { useState } from 'react';
import clear from './img/cleaning.png';

const App = () => 
{
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const haddleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const haddleEquals = () =>
  {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0')
    {
      switch(operation)
      {
          case '+':
            haddleSumNumbers();
          break;

          case '-':
            haddleSubNumbers();
          break;

          case '*':
            haddleMulNumbers();
          break;

          case '/':
            haddleDivideNumbers();
          break;

          default:
          break;
      }
    }
  }
  const haddleAddNumber = (num) => 
  {
    setCurrentNumber(prev => `${prev == 0 ? '': prev}${num}`)
  };

  const haddleSumNumbers = (num) =>
  {
    if(firstNumber == '0')
    {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }
    else
    {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const haddleSubNumbers = (num) =>
  {
    if(firstNumber == '0')
    {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }
    else
    {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const haddleMulNumbers = (num) =>
  {
    if(firstNumber == '0')
    {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    }
    else
    {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  const haddleDivideNumbers = (num) =>
  {
    if(firstNumber == '0')
    {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }
    else
    {
      const divide = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(divide))
      setOperation('')
    }
  }

  return (
    <Container>
        <Content>
          <CalcDiv>
            <Input value={currentNumber}></Input>
              <ButtonsDiv>
                <Row>
                  <Button label="+" onClick={haddleSumNumbers} />
                  <Button label="-" onClick={haddleSubNumbers} />
                  <Button label="x" onClick={haddleMulNumbers} />
                  <Button label="÷" onClick={haddleDivideNumbers} />
                  <Button label={<Image src={clear} alt={'Simbolo de Limpar Calculadora'} />} onClick={haddleClear}>
                  </Button>
                </Row>
                <Row>
                    <Button label="0" onClick={() => haddleAddNumber('0')} />
                    <Button label="1" onClick={() => haddleAddNumber('1')} />
                    <Button label="2" onClick={() => haddleAddNumber('2')} />
                    <Button label="3" onClick={() => haddleAddNumber('3')} />
                    <Button label="4" onClick={() => haddleAddNumber('4')} />
                </Row>
                <Row>
                    <Button label="5" onClick={() => haddleAddNumber('5')} />
                    <Button label="6" onClick={() => haddleAddNumber('6')} />
                    <Button label="7" onClick={() => haddleAddNumber('7')} />
                    <Button label="8" onClick={() => haddleAddNumber('8')} />
                    <Button label="9" onClick={() => haddleAddNumber('9')} />
                </Row>
                <Row>
                    <ButtonEqual onClick={haddleEquals}>=</ButtonEqual>
                </Row>
              </ButtonsDiv>
            </CalcDiv>
            
        </Content>
       
    </Container>
  );
}

export default App;
