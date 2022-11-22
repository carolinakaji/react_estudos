const Events = () => {

  const handleMyEvent = (e) => {
    console.log('clicou');
    console.log(e.type);
    console.log(e.type==='click' ? 'Yeess Click!!': 'Noooo Click')
  };

  return(
    <div>
      <div><button onClick={handleMyEvent}>Clique aqui!</button></div>
    </div>
  );
};

export default Events;