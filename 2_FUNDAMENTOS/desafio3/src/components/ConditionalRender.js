import {useState} from 'react';

const ConditionalRender = () => {

  const [x] = useState(false);
  return (
    <div>
      <h1>Exibe ou não?</h1>
      {x && <p>Exibe quando x for true</p>}
      {!x && <p>Exibe quando x for not false</p>}
    </div>
  );
};

export default ConditionalRender;