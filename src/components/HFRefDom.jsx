import React, { useRef } from 'react'

function HFRefDom() {
    var inputElement = useRef(null);

    const setFocus = ()=>{
        inputElement.current.focus();
        inputElement.current.style.backgroundColor = "blue";
    }    
    return (

        <div>
            <br/><input ref={inputElement} type="text" value={undefined}></input>
            <br/><input type="button" value="Alterar" onClick={setFocus}></input>
        </div>
    )
}

export default HFRefDom