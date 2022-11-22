// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions'

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
    </div>
  );
}

export default App;
