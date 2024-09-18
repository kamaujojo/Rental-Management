
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin-messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      }
    };
     fetchMessages();  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.message}</li> 
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard ;
