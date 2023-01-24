import './App.css'
function App() {
  return (
    <>
      <h1>Seletor de ufs e cidades</h1>
      <div className="container">
        <select name="uf" id="uf">
          <option value="0">Selecione a UF</option>
        </select>
        
        <select name="city" id="city">
          <option value="0">Selecione a cidade</option>
        </select>
      </div>
    </>
  );
}

export default App;