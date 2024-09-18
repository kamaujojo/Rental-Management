// src/App.js
import React from 'react';
import SendNotification from './components/SendNotification';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <h1>Payment Notification System</h1>
      <SendNotification />
      <AdminDashboard /> 
    </div>
  );
}

export default App;
