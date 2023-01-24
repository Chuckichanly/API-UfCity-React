import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

type IBGEUFResponse = {
  id: number;
  sigla: string;
  nome: string;
};

type IBGECITYResponse = {
  id: number;
  nome: string;
};

function App() {
  const [ufs, setUfs] = useState<IBGEUFResponse[]>([]);
  const [cities, setCities] = useState<IBGEUFResponse[]>([]);
  const [selectedUf, setSelectedUf] = useState("8");
  const [selectedCity, setSelectedCity] = useState("8");
  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then((response) => {
      setUfs(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then((response) => {
      setCities(response.data);
    });
  }, [selectedUf]);

  function handleSelectedUf(event:ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }
  
  function handleSelectedCity(event:ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  return (
    <>
      <h1>Seletor de ufs e cidades</h1>
      <div className="container">
        <select name="uf" id="uf" onChange={handleSelectedUf}>
          <option value="0">Selecione a UF</option>
          {ufs.map(uf => (
            <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
          ))}
        </select>
        
        <select name="city" id="city" value={selectedCity} onChange={handleSelectedCity}>
          <option value="0">Selecione a cidade</option>

          {cities.map((city) => (
            <option key={city.id} value={city.sigla}>{city.nome}</option>
          ))}
          
        </select>
      </div>
    </>
  );
}

export default App;