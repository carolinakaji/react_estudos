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
    </div>
  );
}

export default App;
