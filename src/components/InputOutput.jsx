// src/components/NumberInputOutput.jsx
import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import './InputOutput.css';

const InputOutput = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,18}$/.test(value)) {
      setInput(value);
      if (value) {
        try {
          const bigIntValue = BigInt(value);
          const hexValue = bigIntValue.toString(16).toUpperCase();
          setOutput(hexValue);
        } catch (error) {
          setOutput('Invalid number');
        }
      } else {
        setOutput('');
      }
    }
  };

  return (
    <div className="number-input-output">
      <label htmlFor="number-input">Enter the Token ID: </label>
      <input
        id="number-input"
        type="text"
        value={input}
        onChange={handleChange}
        maxLength="18"
      />
      <div className="output-code">
        <CodeBlock
            title="Hex Number (15 Digits)">{`${output}`}
            </CodeBlock>
      </div>
    </div>
  );
};

export default InputOutput;