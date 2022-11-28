import React from 'react'

export const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro - destructuring</h2>
      <ul>
        <li>Brand: {brand}</li>
        <li>km: {km}</li>
        <li>color: {color}</li>
      </ul>
      {newCar && <p>Esse carro o é novo</p>}
    </div>
  )
}