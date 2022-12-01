import './MyForm.css';
import { useState } from 'react';

const MyForm = ({ user }) => {
  // 6 - Controlled inputs - recebe user como props
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  }
  // console.log(name)
  // console.log(email)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role)

    // 7 - Limpar form
    setName("");
    setEmail("");
    setBio("");
  }

  return (
    <div>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            value={name} />
        </div>
        {/* 2 - label envolvendo input - doc indica esta abordagem*/}
        {/* 4 - alteração do state inline. No onChange, colocar a função chamando o setState */}

        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => (setEmail(e.target.value))}
            value={email} />
        </label>

        {/* 8- Textarea */}
        <label>
          <span>Sobre</span>
          <textarea
            name="bio"
            value={bio}
            onChange={(e) => (setBio(e.target.value))}
            placeholder="Diga algo sobre você!"></textarea>
        </label>

        {/* 9- Select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => (setRole(e.target.value))}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm