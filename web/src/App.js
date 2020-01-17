import React, { useEffect, useState } from 'react';
import api from './services/api';

// Componente: Bloco isolado de HTML, CSS e Js, que não interfere no resto da aplicação.
// Propriedade: Informação que um componente PAI, passa para componente FILHO.
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade).
// <> fragment (utilizado para evitar divs perdidas).


// function App() {
//   const [counter, setCounter] = useState(0);

//   function incrementCounter(){
//     setCounter(counter + 1);
//   }

//   return (
//   <>
//   <h1>Contador: {counter}</h1>
//   <button onClick={incrementCounter}>Incrementar</button>
//    </>
//   );
// }

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
          < DevItem  key={dev._id} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
