import React, { useRef, useState } from 'react'

function HFRef() {

    var idade = useRef(10);
    var [,setValida] = useState(true);

    const aumentaIdade = () =>{
        idade.current++;
        console.log(idade.current);
    }

    const validaIdade = () =>{
        var eMaior = idade.current >18;
        setValida(eMaior);
        console.log(eMaior? "SIM É VALIDA": "NÃO, NÃO É VÁLIDA");
    }

    return (
        <div>
            <label>{idade.current}</label>
            <br/><input type="button" value="Aumentar" onClick={aumentaIdade}></input>
            <br/><input type="button" value="Validar" onClick={validaIdade}></input>
        </div>
    )
}

export default HFRef