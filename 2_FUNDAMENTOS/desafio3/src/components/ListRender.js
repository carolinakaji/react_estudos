import React, { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Arroz', 'Alface', 'Lentilha', 'Tomate', 'Amendoim']);

  const [products, setProducts] = useState([
    { id: 1, product: 'Rice', price: 18.00 },
    { id: 2, product: 'Letuce', price: 3.00 },
    { id: 3, product: 'Tomato', price: 5.00 },
    { id: 4, product: 'Peanut', price: 15.00 },
    { id: 5, product: 'Cheese', price: 7.00 },
  ])

  const deleteRandom = () => {
    const randomNumber = Math.ceil(Math.random() * 5);
    console.log(randomNumber);
    setProducts((prevProducts) => {
      // filtra a array e devolve os produtos cujo id são diferentes do número gerado.
      return prevProducts.filter((product) => randomNumber !== product.id)
    })
  }

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
        {/* Pushing a new product {products.push({id: 128, product: 'Sofa', price: 800.00})}*/}
        {products.map((product) => (
          <li key={product.id}>{product.product} - U${product.price}</li>
        ))}
      </ul>
      <div>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    </div>
  )
}

export default ListRender;
