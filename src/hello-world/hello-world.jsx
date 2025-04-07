import { useState } from "react";

const HelloWorld = () => {
    
    let [name, setName] = useState('');
    let [message, setMessage] = useState('');


    const handleHelloWorld = (event) => {
        setMessage(`Hello World, ${name}!`)
    };


    const handleClear = () => {
        setMessage('');
        setName('');
    }

    const handleChangeInput = (event) => {
        setName(event.target.value);    
        console.log('name: ', name);
    }

    const handleKeyInput = (event) => {
        console.log(event)
        if (event.key === 'Escape') {
            handleClear();
        } else if (event.key === 'Enter') {
            handleHelloWorld();
        }
    }

    return (
        <section>
            <h1>Hello World</h1>
            <input type="text"  onChange={handleChangeInput} onKeyUp={handleKeyInput} value={name}/>
            <button onClick={handleHelloWorld}>Hello World</button>
            <button onClick={handleClear}>Limpar</button>
            {message && <p>{message}</p>}
        </section>

    )
}

export default HelloWorld;