const Challenge = () => {
  let a = 10;
  let b = 40;
  const handleSomaValores = () => {
    let soma = a + b;
    return console.log(soma);
  }
  return(
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={handleSomaValores}>Clique para somar</button>
    </div>

  );
}

export default Challenge;