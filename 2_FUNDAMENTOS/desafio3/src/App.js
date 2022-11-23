import './App.css';
import Img2 from './assets/img2.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      <div>
        {/*When the img is inside the public folder, it's not necessary to import the img. It's linked to the src attribute*/}
        <h2>Imagens no public</h2>
        <img className="img_gram" src="/img1.jpg" alt="Ilha vista do alto" />
      </div>
      <div>
        {/*When the img is inside the src/assets folder, it's necessary to import the img and call it as a template expression in src*/}
        <h2>Imagens no assets</h2>
        <img className="img_gram" src={Img2} alt="Ilha vista do alto" />
      </div>

      {/* useState Hook */}
      <div>
        <ManageData />
      </div>
      {/* Render List*/}
      <div>
        <ListRender />
      </div>
    </div>
  );
}

export default App;
