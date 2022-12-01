import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      {/* 5- Controlled input - passando parametros do user como props */}
      <MyForm user={{name: "Josias", email: "josias@gmail.com"}}/>
    </div>
  );
}

export default App;
