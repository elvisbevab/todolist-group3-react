import React from 'react';



export default function ButtonBox({ onDelete, onEdit }) {
  return (
    <div>
      <button onClick={onDelete}  className="button">✖️</button>
      <button onClick={onEdit}  className="button">🔙</button>
    </div>
  );
}


