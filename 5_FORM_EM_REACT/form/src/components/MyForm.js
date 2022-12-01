import './MyForm.css';
import { useState } from 'react';

const MyForm = () => {
// 3 - Gerenciamento de dados
const [name, setName] = useState();
const [email, setEmail] = useState();

const handleName = (e) => {
  setName(e.target.value);
}
// console.log(name)
// console.log(email)

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name, email)
}

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName}/>
        </div>
        {/* 2 - label envolvendo input - doc indica esta abordagem*/}
        {/* 4 - alteração do state inline. No onChange, colocar a função chamando o setState */}
        <div>
          <label>
            <span>E-mail:</span>
            <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => (setEmail(e.target.value))}/>
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm