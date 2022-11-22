const NewEvent = () => {


  const handleRandomNumber = () => {
  let number = 0;
  number = Math.floor(Math.random() * 10) + 1
  return console.log(number);
};

  return(
    <div>
      <button onClick={handleRandomNumber}>Random Number</button>
    </div>
  );
}

export default NewEvent;