import { useState } from "react"

const calculadora = () => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [operacao, setOperacao] = useState('SOMA');
    const [resultado, setResultado] = useState('');

    const calcular = () => {
        const num1 = parseFloat(valor1);
        const num2 = parseFloat(valor2);

        if (isNaN(num1) || isNaN(num2)) {
            setResultado('Por favor, insira valores válidos!');
            return;
        }

        let res;
        switch (operacao) {
            case 'soma':
                res = num1 + num2;
                break;
            case 'subtracao':
                res = num1 - num2;
                break;
            case 'multiplicacao':
                res = num1 * num2;
                break;
            case 'divisao':
                res = num1 / num2;
                break;
            default:
            res = 'Operação Invalida!';
        }
        setResultado(`Resultado: ${res}`);
    };

    const limpar = () => {
        setValor1('');
        setValor2('');
        setOperacao('SOMA');
        setResultado('');
    };

    return (
        <div>
            <h2>Calculadora Básica</h2>
            <div>
                <input type="number" value={valor1} onChange={(e) => setValor1(e.target.value)} placeholder="Primeiro Valor: "></input>
            </div>
            <div>
                <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
                    <option value=""></option>
                    <option value="soma">Soma (+)</option>
                    <option value="subtracao"> Subtração (-)</option>
                    <option value="multiplicacao">Multiplicação (*)</option>
                    <option value="divisao"> Divisao (/)</option>
                </select>
            </div>
            <div>
                <input type="number" value={valor2} onChange={(e) => setValor2(e.target.value)} placeholder="Segundo Valor: ">
                </input>
            </div>
            <div>
                <button onClick={calcular}>Calcular</button>
                <button onClick={limpar}>Limpar</button>
            </div>
            {resultado && <p>{resultado}</p>}
        </div>
    );
};

export default calculadora;