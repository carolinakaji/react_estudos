import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de Componente */}
      <MyComponent />
      <p>Este é o parágrafo do 
        App.js
      </p>

      {/* Inline CSS - não é muito aplicado pois dificulta a manutenabilidade */}
      <p style={{color: "blue", padding:"25px", borderTop:"2px solid red", backgroundColor: "#fff"}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color: "magenta", padding:"25px", borderTop:"2px solid red", backgroundColor: "#fff"}}>Este elemento foi estilizado de forma inline</p>

    </div>
  );
}

export default App;
