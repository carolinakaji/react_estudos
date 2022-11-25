import React from 'react'

export const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhs do carro - destructuring</h2>
      <div>Brand: {brand}</div>
      <div>km: {km}</div>
      <div>color: {color}</div>
    </div>
  )
}