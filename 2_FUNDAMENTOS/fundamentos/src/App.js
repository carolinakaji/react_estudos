// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent';

// styles/ CSS
import './App.css';

function App() {
  // Testando os comentários
  return (
    <div className="App">
      {/* Comentário no JSX */}
      <h1>Fundamentos</h1>
      <h2>Criando componente</h2>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />

    </div>
  );
}

export default App;
