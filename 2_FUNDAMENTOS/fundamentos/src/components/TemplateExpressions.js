const TemplateExpressions = () => {

  const name = "Carol";
  const data = {
    age: 37,
    job: 'programmer'
  }
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {data.age}</p>
      <p>Job: {data.job}</p>
    </div>
  );
}

export default TemplateExpressions;