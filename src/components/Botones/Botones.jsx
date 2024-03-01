import React from 'react';
import "./Botones.css"

function Botones({ onSumar, onRestar }) {
  return (
    <div className='Botones'>
      <button onClick={onSumar}>Sumar</button>
      <button onClick={onRestar}>Restar</button>
    </div>
  );
}

export default Botones;