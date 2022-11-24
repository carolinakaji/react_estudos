import { useState } from 'react';

const ConditionalRender = () => {

  const [x] = useState(false);
  const [nome, setNome] = useState("Joana")

  return (
    <div>
      <h2>Exibe ou não?</h2>
      {x && <p>Exibe quando x for true</p>}
      {!x && <p>Exibe quando x for not false</p>}
      <h2>If ternário</h2>
      {nome === "Joana"
        ? <div><p>Nome Joana</p></div>
        : <div><p>Nao existe {nome}</p></div>}
      <button onClick={() => {
        setNome('Malu');
        console.log(nome);
      }}>Alterar Nome</button>
    </div>

  );
};

export default ConditionalRender;