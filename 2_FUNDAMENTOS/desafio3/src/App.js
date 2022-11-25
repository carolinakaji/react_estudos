import './App.css';
import Img2 from './assets/img2.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

import {useState} from 'react';
import { CarDetails } from './components/CarDetails';

function App() {
  const name = "Carol";
  const [userName] = useState('Maria');

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

      <div>
        <ConditionalRender />
      </div>

      <div>
        <ShowUserName name={name}/>
        <ShowUserName name={userName}/>
      </div>

      <div>
        <CarDetails brand="BMW" km={50000} color="black"/>
      </div>
    </div>
  );
}

export default App;
