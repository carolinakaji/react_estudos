import {useState} from 'react';

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(10);



  return(
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Alterar</button>
      </div>
      <div>
        <p>Valor com useState: {number}</p>
        <button onClick={() => setNumber(Math.floor(Math.random() * 10) + 1)}>Alterar</button>
      </div>
    </div>
  );
}

export default ManageData;