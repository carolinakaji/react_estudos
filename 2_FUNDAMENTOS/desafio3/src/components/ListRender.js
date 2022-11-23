import React, { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Arroz', 'Alface', 'Lentilha', 'Tomate', 'Amendoim'])
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender;
