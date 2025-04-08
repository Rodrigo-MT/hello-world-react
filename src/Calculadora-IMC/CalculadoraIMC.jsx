import React, { useState } from 'react';

const CalculadoraIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
      setResultado('Por favor, insira valores válidos');
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc < 30) {
      classificacao = 'Sobrepeso';
    } else if (imc < 35) {
      classificacao = 'Obesidade grau I';
    } else if (imc < 40) {
      classificacao = 'Obesidade grau II';
    } else {
      classificacao = 'Obesidade grau III';
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
  };

  const limpar = () => {
    setPeso('');
    setAltura('');
    setResultado('');
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <div>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso (kg)"
        />
      </div>
      <div>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura (m)"
          step="0.01"
        />
      </div>
      <div>
        <button onClick={calcularIMC}>Calcular</button>
        <button onClick={limpar}>Limpar</button>
      </div>
      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default CalculadoraIMC;