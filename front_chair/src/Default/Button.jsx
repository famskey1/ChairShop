import React from 'react';
import '../App.css';

export default function Button({children, onClick, type}) {
  return (
    <button type ={type} onClick = {onClick}>{children}</button>
  );
}
