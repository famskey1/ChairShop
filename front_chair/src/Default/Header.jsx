import React from 'react';
import '../App.css';
import icon from "../Assets/icon.png"

export default function Header() {
  return (
  <header>
    <img src={icon} className='iconHeader'></img>
    <h2>МАГАЗИН СТУЛЬЕВ! ТОЛЬКО СТУЛЬЯ!</h2>
  </header>
  );
}
