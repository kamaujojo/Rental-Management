import React, { useState } from 'react';
import axios from 'axios';

const SendButton = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = async () => {
    try {
    
      const url = 'https://api.example.com/endpoint';
      
      
      const data = {
        name: 'Ian Hawi',
        age: 30
      };


      const response = await axios.post(url, data);

    
      setResponseMessage(`Success: ${response.data.message}`);
      setErrorMessage(''); 
    } catch (error) {
      
      if (error.response) {
        setErrorMessage(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        setErrorMessage('Error: No response received from server.');
      } else {
        setErrorMessage(`Error: ${error.message}`);
      }
      setResponseMessage(''); 
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Send</button>
      {responseMessage && <p style={{ color: 'green' }}>{responseMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default SendButton;
