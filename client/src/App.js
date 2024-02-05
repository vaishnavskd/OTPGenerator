import React, { useState } from 'react';
import EmailForm from './components/EmailForm';
import OTPForm from './components/OTPForm';
import axios from 'axios';
import Main from './components/Main';
import { Route, Routes, useNavigate } from 'react-router-dom';

const App = () => {
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [email, setEmail] = useState('');
  const navigate=useNavigate()

  const handleEmailSubmit = async (enteredEmail) => {
    try {
      const response = await axios.post('http://localhost:3001/api/generate', { email: enteredEmail });

      const result = response.data;

      if (result.success) {
        setEmail(enteredEmail);
        setShowEmailForm(false);
      } else {
        console.error('Error generating OTP');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOTSubmit = async (enteredOTP) => {
    try {
      const response = await axios.post('http://localhost:3001/api/verify', { email, otp: enteredOTP });

      const result = response.data;

      if (result.success) {
        navigate('/main')
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Routes>
      <Route path='/main' element={<Main />} />
      <Route
        path='/'
        element={
          showEmailForm ? (
            <EmailForm handleEmailSubmit={handleEmailSubmit} />
          ) : (
            <OTPForm handleOTSubmit={handleOTSubmit} />
          )
        }
      />
    </Routes>
  );
};

export default App;
