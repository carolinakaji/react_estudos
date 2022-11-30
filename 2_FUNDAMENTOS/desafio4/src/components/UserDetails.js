import React from 'react';

const UserDetails = ({ nome, idade, profissao, hobbies, filhos }) => {
  return (
    <div>

      <h2>- {nome} -</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      <p>Hobbies: {hobbies.map((hobbie) => (
        <p>{hobbie}</p>
      ))}</p>
      <p>Possui filhos:{filhos ? 'Sim' : 'Não'}</p>

      {/* {idade >=18 && <p>Pode tirar carteira de habilitacção</p>} */}
      {idade > 18 ? <h3>Pode tirar carteira de habilitação</h3> : <h3>Não pode tirar carteira de habilitação</h3>}
    </div>
  )
}

export default UserDetails