import React, {useState, useEffect} from 'react'

function HFMouse() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getMousePos = (e)=>{
        console.log('coordenadas');
        setX(e.screenX);
        setY(e.screenY);
    }

    useEffect(() => {
        window.addEventListener("mousemove", getMousePos);
        return ()=>{
            window.removeEventListener("mousemove", getMousePos );
        }
    },[])

    return (
        <div>
            Posição: X = {x} Y = {y}
        </div>
    )
}

export default HFMouse
