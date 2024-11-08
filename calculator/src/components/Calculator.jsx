import { useState } from 'react';
import '../styles/Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const buttons = [
    'C', '±', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleClick(button)}
            className={button === '=' ? 'equals' : ''}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
