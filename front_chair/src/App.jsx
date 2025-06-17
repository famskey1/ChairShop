import React from 'react';
import './App.css';
import Register from './Access/Register';
import LoginPass from './Access/LoginPass';
import { useState } from 'react';
import TabsAutoReg from './Tabs/TabsAutoReg';

export default function App() {
  const [tab, setTab] = useState('auto', 'reg')
  return (
  <div className='AuRegMenu'>
    <TabsAutoReg active = {tab} onChange = {(current) => setTab(current)}/>
      {tab === 'auto' &&(
        <LoginPass/> 
      )}
      {tab === 'reg' &&(
        <Register/>
      )}
  </div>
  )
}
