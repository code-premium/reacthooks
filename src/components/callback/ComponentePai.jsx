import React ,{useState, useCallback} from 'react';
import Button from './Button';
import Title from './Title';

function ComponentePai() {

    console.log('Renderizando ... pai');
    const [idade, setIdade] = useState(20);
    const [salario, setSalario] = useState(1000);

    const aumentarIdade = useCallback(()=>{
        setIdade(idade +1);
    },[idade]);

    const aumentarSalario = useCallback(()=>{
        setSalario(salario +1000);
    },[salario])


    return <div>
        <Title></Title>
        <br/>
        <Button handleClick={aumentarIdade}>Aumentar idade</Button>
        <div>Idade: {idade}</div>
        <Button handleClick={aumentarSalario}>Aumentar salário</Button>
        <div>Salário: {salario}</div>
    </div>;
}

export default ComponentePai;
