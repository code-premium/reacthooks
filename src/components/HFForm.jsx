import React, { useState } from 'react'

function HFForm() {

    const [nome, setNome] = useState({ name: "", lastName: "" });
    
    const setProp =(key, e)=>{
        setNome({ ...nome, [key]: e.target.value })
    }

    return (
        <div>
            <input type="text" name="name" onChange={e => setProp("name",e) }></input>
            <input type="text" name="lastName" onChange={e => setProp("lastName",e)}></input>

            <div>
                O nome é: {nome.name} o sobrenome é : {nome.lastName}
            </div>
        </div>
    )
}

export default HFForm
