import './App.css';
import React, { useState } from 'react';

function App() {
  const [temperatura, setTemperatura] = useState([]);
  const [temperaturaExcluida, setTemperaturaExcluida] = useState([]);
  const [temperaturaAdd, setTemperaturaAdd] = useState('');

  const handleAddTemperatura = () => {
    setTemperatura([...temperatura, temperaturaAdd]);
    setTemperaturaAdd('');
  };

  // const handleRemoveTemperatura = (index) => {
  //   const temperaturaCompleta = temperatura[index];
  //   setTemperatura(temperatura.filter((_, i) => i !== index));
  //   setTemperaturaExcluida([...temperaturaExcluida, temperaturaCompleta]);
  // };
  
  const handleRemoveTemperatura = (index, isCompleted) => {
    if (isCompleted) {
      setTemperaturaExcluida(temperaturaExcluida.filter((_, i) => i !== index));
    } else {
      setTemperatura(temperatura.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <h1>Gerenciamento de Temperaturas</h1>
      <div className="temperatura-container">
        <div className="temperatura-list">
          <h2>Temperaturas Adicionadas ({temperatura.length})</h2>
          <table>
            <tbody>
              {temperatura.map((temperatura, index) => (
                <tr key={index}>
                  <td>{temperatura}</td>
                  <td>
                    <button onClick={() => handleRemoveTemperatura(index, false)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="exclui">
          <h2>Temperaturas Excluídas({temperaturaExcluida.length})</h2>
          <table>
            <tbody>
              {temperaturaExcluida.map((temperaturaExcluida, index) => (
                <tr key={index}>
                <td>{task}</td>
                <td>
                  <button onClick={() => handleRemoveTemperatura(index, false)}>Excluir</button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="adiciona">
        <h2>Adicionar Temperatura</h2>
        <input
          type="text"
          value={temperaturaAdd}
          onChange={(e) => setTemperaturaAdd(e.target.value)}
        />
        <button onClick={handleAddTemperatura}>Adicionar</button>
      </div>
    </div>
  );
}

export default App;
