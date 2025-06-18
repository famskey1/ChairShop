import React from 'react';
import './App.css';
import './Access/Auth.css'
import Register from './Access/Register';
import LoginPass from './Access/LoginPass';
import { useState } from 'react';
import Button from './Default/Button';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleForms = () => {setIsActive(!isActive);};
  
  return (
  <div className="AuRegMenu">
      <Button type="button" className="toggle-form" onClick={toggleForms}>
        {isActive ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
        </Button>
        <div className={`forms-container ${isActive ? 'active' : ''}`}>
        <LoginPass isActive={isActive} />
        <Register isActive={!isActive} />
    </div>
  </div>
  )
};
export default App;