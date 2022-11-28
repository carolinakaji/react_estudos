const Container = ({children, valueTesting}) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}
      <p>Este eh o props valueTesting: {valueTesting}</p>
    </div>
  )
}

export default Container