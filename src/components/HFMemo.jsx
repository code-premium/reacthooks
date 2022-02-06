import React, { useState, useMemo } from 'react';

function HFMemo() {

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    const addContador1 = () => {
        setContador1(contador1 + 1);
    }

    const addContador2 = () => {
        setContador2(contador2 + 1);
    }

    const parOuImpar = useMemo(() => {
        let i = 0;
        //while (i < 3000000000) i++;
        return contador1 % 2 === 0
    },[contador1])

    return <div>
        <button onClick={addContador1}>Contador 1 : {contador1}</button>
        <span> {parOuImpar ? 'Par' : 'Impar'}  </span>
        <br />
        <br />
        <button onClick={addContador2}>Contador 2 : {contador2}</button>
    </div>;
}

export default HFMemo;
