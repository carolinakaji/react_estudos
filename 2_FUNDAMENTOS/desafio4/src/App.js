import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  const people = [
    {
      id: 1,
      nome: "Carol",
      idade: 37,
      profissao: 'Programadora',
      hobbies: ['Ler', 'Cozinhar', 'Assitir Netflix'],
      filhos: true
    },
    {
      id: 2,
      nome: "Gustavo",
      idade: 32,
      profissao: 'Analista de Qualidade',
      hobbies: ['Tocar Guitarra', 'Carros', 'Assitir Youtube'],
      filhos: true
    },
    {
      id: 3,
      nome: "Harry",
      idade: 37,
      profissao: 'Auror',
      hobbies: ['Se meter em encrenca', 'Quadribol', 'Ajudar'],
      filhos: true
    },
    {
      id: 4,
      nome: "Nickolas",
      idade: 0,
      profissao: 'Bebê lindo',
      hobbies: ['Se meter em encrenca', 'Dar gargalhada', 'Brincar'],
      filhos: false
    },
  ]
  return (
    <div className="App">
      {people.map((detail) => (
        <UserDetails
          key={detail.id}
          nome={detail.nome}
          idade={detail.idade}
          profissao={detail.profissao}
          hobbies={detail.hobbies}
          filhos={detail.filhos} />
      ))}
    </div>
  );
}

export default App;
