import React, { useState } from 'react';
// import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleKeyPress = (event) => {
    const keyPressed = event.key;
    if ((keyPressed >= '0' && keyPressed <= '9') || '+-*/.c='.includes(keyPressed)) {
      handleInput(keyPressed);
    }
  };

  const handleInput = (input) => {
    if (input === '=') {
      try {
        const result = eval(expression);
        setExpression(String(result));
      } catch (error) {
        setExpression('Error');
      }
    } else if (input === 'c') {
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + input);
    }
  };

  return (
    <div className="calculator" tabIndex="0" onKeyDown={handleKeyPress}>
      <input type="text" value={expression} readOnly />
      <div className="buttons">
        {['0','1', '2', '3', '4', '5', '6', '7', '8', '9', '+','-', '*', '/', '=','.', 'c'].map((button) => (
          <button key={button} onClick={() => handleInput(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
