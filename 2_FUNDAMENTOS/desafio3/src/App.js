import './App.css';
import Img2 from './assets/img2.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';

import { useState } from 'react';
import { CarDetails } from './components/CarDetails';
import Container from './components/Container';

function App() {
  const name = "Carol";
  const [userName] = useState('Maria');

  const cars = [
    { id: 1, brand: "BMW", km: 0, color: "Black", newCar: false },
    { id: 2, brand: "Ferrari", km: 2000, color: "Yellow", newCar: false },
    { id: 3, brand: "Audi", km: 1000, color: "White", newCar: false },
  ]

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

      {/* Conditional Render*/}
      <div>
        <ConditionalRender />
      </div>

      {/* Destructuring*/}
      <div>
        <ShowUserName name={name} />
        <ShowUserName name={userName} />
      </div>

      {/* Reusing component*/}
      <div>
        <CarDetails brand="BMW" km={50000} color="Black" newCar={false} />
        <CarDetails brand="Fiat" km={90000} color="Red" newCar={false} />
        <CarDetails brand="Honda" km={0} color="Blue" newCar={true} />
      </div>
      {/* Rendering List Component */}
      <div>
        <h2>Rendering List - Array of Objects - Map</h2>
        {cars.map((cars) => (
          <CarDetails brand={cars.brand} km={cars.km} color={cars.color} newCar={cars.newCar} />
        ))}
      </div>
      {/* Children prop */}
      <div>
        <Container valueTesting='Value'>
          <h1>Este é o conteúdo</h1>
        </Container>
        <Container valueTesting='Outro componente'>
          <h3>Outro conteúdo</h3>
        </Container>
      </div>
    </div>
  );
}

export default App;
