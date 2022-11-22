const Events = () => {

  const handleMyEvent = (e) => {
    console.log('clicou');
    console.log(e);
  };

  return(
    <div>
      <div><button onClick={handleMyEvent}>Clique aqui!</button></div>
    </div>
  );
};

export default Events;