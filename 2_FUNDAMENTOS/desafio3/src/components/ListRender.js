import React, { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Arroz', 'Alface', 'Lentilha', 'Tomate', 'Amendoim']);

  const [products] = useState([
    {id: 123, product: 'Rice', price: 18.00},
    {id: 124, product: 'Letuce', price: 3.00},
    {id: 125, product: 'Tomato', price: 5.00},
    {id: 126, product: 'Peanut', price: 15.00},
    {id: 127, product: 'Cheese', price: 7.00},
  ])
  return (
    <div>
      <ul>
        {/* using the index of an array is not recommended, because it can change.  */}
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* The best way to use a key is associating it to the id that comes from database.  */}
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.product} - U${product.price}</li>
            ))}
          </ul>
    </div>
  )
}

export default ListRender;
