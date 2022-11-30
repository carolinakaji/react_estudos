import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';

function App() {
  const n = 15;
  const [name] = useState("Carol")
  const redTitle = true;

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

      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>CSS Dinamico - true</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color: "pink"}}>CSS Dinamico - false</h2>
      <h2 style={name === 'Carol' ? {backgroundColor: "#FBE6D4", color: "#B9AC92"}: null}>CSS Dinamico - useState</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Title with dinamic class applied - {redTitle? "red-title class": "title class"}</h2>
    </div>
  );
}

export default App;
