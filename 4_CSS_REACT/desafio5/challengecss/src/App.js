import './App.css';
import CarDetails from './Components/CarDetails';

function App() {
  const auto = [
    { brand: 'Honda', color: 'Cinza', model: 'City', year: 2022, price: 100000.00, info: "Carro novo" },
    { brand: 'Toyota', color: 'Preto', model: 'Corolla', year: 2021, price: 100000.00, info: "Único dono, baixa quilometragem, nunca batido" },
    { brand: 'VolksWagen', color: 'Azul', model: 'Polo', year: 2020, price: 80000.00, info: "Dono zeloso, possui multimídia" },
    { brand: 'Fiat', color: 'Amarelo', model: 'Uno', year: 2018, price: 30000.00, info: "Cor atraente, compacto para suas necessidades" }
  ]

  return (
    <div className="App">
      <h1>Venda de carros</h1>
      <div className="car_container">

        {auto.map((car) => (
          <CarDetails brand={car.brand} color={car.color} model={car.model} year={car.year} price={car.price} info={car.info} />
        ))}
      </div>
    </div>
  );
}

export default App;
